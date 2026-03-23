import {Platform, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from "expo-router";

const ChatScreen = () => {
    const navigation = useNavigation();
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
            <Text>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen;