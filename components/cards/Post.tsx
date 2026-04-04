import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IPost} from "@/interfaces/posts";
import {useDispatch, useSelector} from "react-redux";
import {addSaved, removeSaved} from "@/store/slices/newsSlice";
import {RootState} from "@/store/store";
import {Link} from "expo-router";

interface IProps {
    data: IPost;
}

const PostCard = ({data}: IProps) => {
    // init
    const {title, id, body} = data;
    const dispatch = useDispatch();
    const saveNews: number[] = useSelector((state: RootState) => state.news.saved)
    return (
        <View style={s.card}>
            <Link style={s.title} href={`/news/${id}`}>
                <Text style={s.titleText}>{title}</Text>
            </Link>
            <Text style={s.body}>{body}
                {body}
            </Text>
            {
                saveNews.includes(id) ? (
                    <TouchableOpacity
                        style={s.buttonReject}
                        onPress={() => dispatch(removeSaved(id))}
                    >
                        <Text style={s.buttonTextReject}>Reject</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={s.button}
                        onPress={() => dispatch(addSaved(id))}
                    >
                        <Text style={s.buttonText}>Save</Text>
                    </TouchableOpacity>
                )
            }

        </View>
    )
}

const s = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    title: {
        marginBottom: 8,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    body: {
        fontSize: 14,
        marginBottom: 8
    },
    button: {
        backgroundColor: 'lightgreen',
        borderWidth: 1,
        borderColor: 'lightgreen',
        width: '100%',
        marginBottom: 8,
    },
    buttonReject: {
        backgroundColor: 'red',
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonTextReject: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
})

export default PostCard;
