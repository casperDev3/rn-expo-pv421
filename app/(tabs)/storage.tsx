import {Alert, Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
// TODO: last element don't save

const StorageScreen = () => {
    // init
    const [task, setTask] = useState<string>('');
    const [savedTasks, setSavedTasks] = useState<string[]>([]);
    const count = useSelector((state: RootState)=> state.counter.value);
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
        </View>
    )
}

export default StorageScreen;