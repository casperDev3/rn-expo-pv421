import {Platform, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation, Link} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {addSaved, removeSaved} from "@/store/slices/newsSlice";
import {RootState} from "@/store/store";

const NewsScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const saveNews: number[] = useSelector((state: RootState) => state.news.saved)
    const news = [
        {
            id: 1,
            title: 'Home',
            text: 'Home is a new page',
        },
        {
            id: 2,
            title: 'Home2',
            text: 'Home is a new page2',
        },
        {
            id: 3,
            title: 'Home3',
            text: 'Home is a new page3',
        }
    ]
    return (
        <View style={{
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "android" ? 48 : 60,
        }}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            {
                news.map((item, index) => (
                    <Link key={index} href={`/news/${item.id}`}>
                        <Text>
                            {item.title}
                        </Text>
                        {
                            saveNews.includes(index) ? (
                                <TouchableOpacity style={{
                                    padding: 4,
                                    backgroundColor: "red",
                                    borderRadius: 4
                                }}
                                                  onPress={() => dispatch(removeSaved(index))}
                                >
                                    <Text style={{
                                        color: "white"
                                    }}>
                                        Прибрати
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={{
                                    padding: 4,
                                    backgroundColor: "green",
                                    borderRadius: 4
                                }}
                                                  onPress={() => dispatch(addSaved(index))}
                                >
                                    <Text style={{
                                        color: "white"
                                    }}>
                                        Зберегти
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </Link>
                ))
            }
        </View>
    )
}

export default NewsScreen;