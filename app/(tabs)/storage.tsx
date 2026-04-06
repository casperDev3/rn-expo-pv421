import {Alert, Button, Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import * as SecureStore from "expo-secure-store"
// TODO: last element don't save

const StorageScreen = () => {
    // init
    const [task, setTask] = useState<string>('');
    const [savedTasks, setSavedTasks] = useState<string[]>([]);
    const [userName, setUserName] = useState<string>('');
    const count = useSelector((state: RootState) => state.counter.value);
    // load
    useEffect(() => {
        loadData().then();
    }, [])
    // methods
    const saveData = async () => {
        try {
            setSavedTasks((prev) => [...prev, task]);
            await AsyncStorage.setItem('tasks', JSON.stringify(savedTasks));
            setTask('');
            Alert.alert('Success!', 'Task saved successfully.');
        } catch (e) {
            console.error(e);
        }
    }

    const saveProfileData = async () => {
        try {
            await AsyncStorage.setItem('@username', 'john_doe');
            Alert.alert('Success!', 'Profile saved successfully.');
        } catch (e) {
            console.error(e);
        }
    }

    const saveSecretToken = async () => {
        await SecureStore.setItemAsync('auth_token', 'jwt-sssp-lsdldsl-lsdlds-123')
        Alert.alert('Success!', 'Secret token saved successfully.');
    }

    const loadSecureToken = async () => {
        const token = await SecureStore.getItemAsync('auth_token');
        if (token) {
            Alert.alert('Success!', token);
            return token;
        }
    }

    const loadProfileData = async () => {
        try {
            const value = await AsyncStorage.getItem('@username');
            if (value) {
                Alert.alert('Success!', value);
                setUserName(value);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const loadData = async () => {
        try {
            const tasks = await AsyncStorage.getItem('tasks');
            // if (task !== null) {
            //     setTask(task);
            // }
            tasks && setSavedTasks([...JSON.parse(tasks)]);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={{
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "android" ? 48 : 60,
        }}
        >
            <View>
                <Text>
                    Глобальний лічильник: {count}
                </Text>
            </View>
            <TextInput
                placeholder="Input task"
                value={task}
                onChangeText={setTask}
            />
            <Text>
                Today task: {task}
            </Text>

            <TouchableOpacity onPress={saveData}>
                <Text>
                    Save task
                </Text>
            </TouchableOpacity>

            <View>
                {
                    savedTasks.map((task, index) => (
                        <Text key={index}>{index + 1}. {task}</Text>
                    ))
                }
            </View>
            <View>
                <Button
                    title={"Save username to AsyncStorage"}
                    onPress={saveProfileData}
                />
                <Button
                    title={"Get username from AsyncStore"}
                    onPress={loadProfileData}
                />
                <Button
                    title={"Save token to SecureStorage"}
                    onPress={saveSecretToken}
                />
                <Button
                    title={"Get token from SecureStorage"}
                    onPress={loadSecureToken}
                />
            </View>
        </View>
    )
}

export default StorageScreen;