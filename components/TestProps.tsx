import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/store/store";
import {increment, decrement, incrementByAmount} from "@/store/slices/counterSlice";


const TestProps = ({data, setData}: any) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <Text>Test Props: {data}</Text>
            <TouchableOpacity onPress={() => setData("Hello World")}>
                <Text>Set data</Text>
            </TouchableOpacity>
            <View>
                <View >
                    <Text >Глобальний лічильник: {count}</Text>

                    <Button title="Додати 1" onPress={() => dispatch(increment())} />
                    <View style={{ height: 10 }} />

                    <Button title="Відняти 1" onPress={() => dispatch(decrement())} color="orange"/>
                    <View style={{ height: 10 }} />

                    <Button title="Додати 10" onPress={() => dispatch(incrementByAmount(10))} color="green" />
                </View>
            </View>
        </>
    )
}



export default TestProps;