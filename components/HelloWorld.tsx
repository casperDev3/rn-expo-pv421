import {Text, View, StyleSheet, Button, Alert} from 'react-native';

const Test = () => {
    const handlePress = () => {
        Alert.alert("Hello World!", "Hello");
    }
    return (
        <View style={{
            backgroundColor: "black"
        }}>
           <Text style={styles.text}> Hello World!</Text>
            <Button title={"Клікни мене!"} onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    }
})
export default Test