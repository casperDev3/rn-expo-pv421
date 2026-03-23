import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "expo-router";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const handlePressBack = () => {
        navigation.goBack()
    }
    return (
        <View style={{
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "android" ? 48 : 60,
        }}>
            {/* Go back button */}
            <TouchableOpacity onPress={handlePressBack}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen;