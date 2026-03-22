import {View, ScrollView, Platform, FlatList, StatusBar, Text, TextInput} from "react-native";
import Test from "@/components/HelloWorld";
import {useState} from "react";

export default function Index() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [text, setText] = useState<string>("");
    const [num, setNum] = useState<number>(0);
    return (
        <View
            style={{
                paddingHorizontal: 16,
                paddingTop: Platform.OS === "android" ? 48 : 60,
            }}
        >
            <View style={{
                flexDirection: "row",
                marginBottom: 14
            }}>
                <View style={{
                    backgroundColor: "orange",
                    flex: 2,
                }}>
                    <Text>
                        V1
                    </Text>
                </View>
                <View style={{
                    backgroundColor: "green",
                    flex: 1,
                }}>
                    <Text>
                        V2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: "red",
                    flex: 1,
                }}>
                    <Text>
                        V3
                    </Text>
                </View>
            </View>
            <StatusBar
                barStyle="dark-content"
            />
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                {
                    data.map((item, index) => (
                        <Test key={index}/>
                    ))
                }
            </ScrollView>
            <FlatList horizontal={true} data={data} renderItem={() => (<Test/>)}/>

            <View>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder={"Введіть текст!"}
                />
                <TextInput
                    value={String(num)}
                    onChangeText={(val) => {
                        setNum(Number(val));
                    }}
                    placeholder="Введіть номер"
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text>
                    Текст: {text}
                </Text>
                <Text>
                    Число: {num}
                </Text>
            </View>
        </View>
    );
}
