import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/store/store";
import {increment, decrement, incrementByAmount} from "@/store/slices/counterSlice";


const TestRedux = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <View>
                <Text>Глобальний лічильник: {count}</Text>

                <Button title="Додати 1" onPress={() => dispatch(increment())}/>
                <View style={{height: 10}}/>

                <Button title="Відняти 1" onPress={() => dispatch(decrement())} color="orange"/>
                <View style={{height: 10}}/>

                <Button title="Додати 10" onPress={() => dispatch(incrementByAmount(10))} color="green"/>
            </View>
        </>
    )
}


export default TestRedux;