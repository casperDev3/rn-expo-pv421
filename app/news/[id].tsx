import {Platform, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation, useLocalSearchParams} from "expo-router";

const SingleNewsScreen = () => {
    const navigation = useNavigation();
    // get id
    const {id} = useLocalSearchParams()
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
            <Text>SingleNewsScreen - 1 - {id}</Text>
        </View>
    )
}

export default SingleNewsScreen;