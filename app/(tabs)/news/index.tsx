import {Platform, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation, Link} from "expo-router";

const NewsScreen = () => {
    const navigation = useNavigation();
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
                        
                    </Link>
                ))
            }
        </View>
    )
}

export default NewsScreen;