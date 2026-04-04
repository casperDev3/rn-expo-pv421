import {Platform, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, Link} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {addSaved, removeSaved} from "@/store/slices/newsSlice";
import {RootState} from "@/store/store";
import ApiService from "@/services/ApiService";
import {useEffect, useState} from "react";
import PostLoader from "@/components/UI/PostLoader";
import PostCard from "@/components/cards/Post";
import {IPost} from "@/interfaces/posts";


const NewsScreen = () => {
    // init
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const saveNews: number[] = useSelector((state: RootState) => state.news.saved)
    const api = ApiService.getInstance()
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    //load
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await api.getData("/posts")
            setPosts(data)
            setLoading(false);
        }
        fetchPosts()
    }, [])

    // show loader
    if (loading) return <PostLoader/>

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
            {/*TouchableOpacity            {*/}
            {/*                news.map((item, index) => (*/}
            {/*                    <Link key={index} href={`/news/${item.id}`}>*/}
            {/*                        <Text>*/}
            {/*                            {item.title}*/}
            {/*                        </Text>*/}
            {/*                        {*/}
            {/*                            saveNews.includes(index) ? (*/}
            {/*                                <TouchableOpacity style={{*/}
            {/*                                    padding: 4,*/}
            {/*                                    backgroundColor: "red",*/}
            {/*                                    borderRadius: 4*/}
            {/*                                }}*/}
            {/*                                                  onPress={() => dispatch(removeSaved(index))}*/}
            {/*                                >*/}
            {/*                                    <Text style={{*/}
            {/*                                        color: "white"*/}
            {/*                                    }}>*/}
            {/*                                        Прибрати*/}
            {/*                                    </Text>*/}
            {/*                                </TouchableOpacity>*/}
            {/*                            ) : (*/}
            {/*                                <TouchableOpacity style={{*/}
            {/*                                    padding: 4,*/}
            {/*                                    backgroundColor: "green",*/}
            {/*                                    borderRadius: 4*/}
            {/*                                }}*/}
            {/*                                                  onPress={() => dispatch(addSaved(index))}*/}
            {/*                                >*/}
            {/*                                    <Text style={{*/}
            {/*                                        color: "white"*/}
            {/*                                    }}>*/}
            {/*                                        Зберегти*/}
            {/*                                    </Text>*/}
            {/*                                </TouchableOpacity>*/}
            {/*                            )*/}
            {/*                        }*/}
            {/*                    </Link>*/}
            {/*                ))*/}
            {/*            }*/}
            {
                posts.length === 0 ? (
                    <View style={{}}>
                        <Text>Haven&#39;t post</Text>
                    </View>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {posts.map(post => <PostCard key={post.id} data={post}/>)}
                    </ScrollView>
                )
            }
        </View>
    )
}

export default NewsScreen;