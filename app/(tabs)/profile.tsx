import {useState} from "react";
import {View, Text, Platform, Button, Image, StyleSheet, Alert} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import {
    useAudioRecorder,
    useAudioRecorderState,
    useAudioPlayer,
    AudioModule,
    RecordingPresets,
    setAudioModeAsync
} from "expo-audio";

const ProfileScreen = () => {
    // init
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [soundUri, setSoundUri] = useState<string | null>(null);

    const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY)
    const recorderState = useAudioRecorderState(audioRecorder)
    const player = useAudioPlayer(soundUri)

    // methods
    async function startRecording() {
        try {
            const status = await AudioModule.requestRecordingPermissionsAsync()
            if (!status) {
                Alert.alert("Потрібен доступ до мікрофона")
                return
            }

            await setAudioModeAsync({
                allowsRecording: true,
                playsInSilentMode: true,
            })

            await audioRecorder.prepareToRecordAsync();
            audioRecorder.record()
        } catch (err) {
            console.warn(err)
        }
    }

    async function stopRecording() {
        try {
            await audioRecorder.stop()

            await setAudioModeAsync({
                allowsRecording: false,
            })
            if(audioRecorder.uri){
                setSoundUri(audioRecorder.uri)
            }
        } catch (error) {
            console.warn(error)
        }
    }

    async function playSound() {
        if (player){
            player.seekTo(0)
            player.play()
        }
    }

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
            <View>
                <Text>
                    Диктофон
                </Text>
                <Button title={recorderState.isRecording ? "Зупинити запис" : "Почати запис"}
                        onPress={recorderState.isRecording ? stopRecording : startRecording}
                        color={recorderState.isRecording ? "red" : "green"}
                />
                {
                    soundUri && (
                        <View>
                            <Button title="Прослухати запис" onPress={playSound}/>
                        </View>
                    )
                }
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