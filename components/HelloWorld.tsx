import React from 'react';
import {Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
// import { Image } from 'expo-image';

const Test = () => {
    const handlePress = () => {
        Alert.alert("Hello World!", "Hello");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello World!</Text>
            {/*<Button style={styles.button} title={"Клікни мене!"} onPress={handlePress}/>*/}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text>Клікни мене!</Text>
            </TouchableOpacity>
            <Image style={styles.img} source={require('../assets/images/icon.png')} />
            {/*<Image style={styles.img} source='../assets/images/icon.png' />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        marginBottom: 16,
        borderRadius: 8,
        marginRight: 8
    },
    text: {
        color: "red",
        fontSize: 20,
    },
    button: {
        backgroundColor: "white",
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 10 // marginVertical
    },
    img: {
        width: 50,
        height: 40,
    }
})
export default Test