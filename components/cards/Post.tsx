import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IPost} from "@/interfaces/posts";

interface IProps {
    data: IPost;
}

const PostCard = ({data}: IProps) => {
    const {title, id, user_id, body} = data;
    return (
        <View style={s.card}>
            <Text style={s.title}>{title}</Text>
            <Text style={s.body}>{body}
                {body}
            </Text>
            <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}>Save</Text>
            </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
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
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
    }
})

export default PostCard;
