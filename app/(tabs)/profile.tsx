import {Alert, Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "expo-router";
import {useEffect, useState, useMemo} from "react";
import TestProps from "@/components/TestProps";
import TestRedux from "@/components/TestRedux";

interface IProfile {
    name: string;
    age: string;
}

const ProfileScreen = () => {
    // init
    const navigation = useNavigation();
    const [profile, setProfile] = useState<IProfile>({
        name: "",
        age: ""
    });
    const [debouncedAge, setDebouncedAge] = useState(profile.age);
    // load
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedAge(profile.age);
        }, 500)

        return () => {
            clearTimeout(handler);
        }
    }, [profile.age])
    //count
    const age_discount = useMemo(() => {
        return Number(debouncedAge) > 18 ? 0 : 0.15;
    }, [debouncedAge])
    // handles
    const handlePressBack = () => {
        navigation.goBack()
    }
    // getters
    const getDataFromComponents = async (data: string) => {
        Alert.alert(data)
        return null
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
            <View>
                <TextInput
                    placeholder={"Name"}
                    value={profile.name}
                    onChangeText={
                        (text) => setProfile(prev => ({...prev, name: text}))
                    }
                />
                <TextInput
                    placeholder={"Age"}
                    value={profile.age}
                    onChangeText={
                        (text) => setProfile(prev => ({...prev, age: text}))
                    }
                    keyboardType="numeric"
                />
                <View>
                    <Text>
                        Hey, {profile.name || "Anonymous"} ({profile.age || "0"})
                    </Text>
                    {
                        debouncedAge !== "" ? (
                            age_discount === 0 ? (
                                <Text>
                                    You haven&#39;t discount ^(
                                </Text>
                            ) : (
                                <Text>
                                    You discount: {age_discount * 100} %
                                </Text>
                            )
                        ) : null
                    }
                </View>
                <TestProps data="Hello!" setData={getDataFromComponents} />
                <TestRedux />
            </View>
        </View>
    )
}

export default ProfileScreen;