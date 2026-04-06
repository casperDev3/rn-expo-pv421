import {useState} from "react";
import {View, Text, Platform, Button, Image, StyleSheet, Alert} from "react-native";
import * as ImagePicker from 'expo-image-picker'

const ProfileScreen = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            // mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8
        })
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    }
    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission denied");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8
        })

        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    }
    return (
        <View
            style={{
                paddingHorizontal: 16,
                paddingTop: Platform.OS === "android" ? 48 : 60,
            }}
        >
            <View>
                <Text>Профіль користувача</Text>
            </View>
            <View>
                {
                    imageUri ? (
                        <Image style={s.avatar} source={{uri: imageUri}}/>
                    ) : (
                        <View>
                            <Text>Немає фото</Text>
                        </View>
                    )
                }
            </View>
            <View>
                <Button title={"Відкрити галерею"} onPress={pickImage}/>
                <Button title={"Відкрити камеру"} onPress={takePhoto}/>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: Platform.OS === "android" ? 48 : 60,
    }
})

export default ProfileScreen;