import {Tabs} from "expo-router";
import {FontAwesome5} from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={
            {
                headerShown: false,
                tabBarActiveTintColor: "#f00",
            }
        }>
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    title: "Profile",
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="user" size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="test"
                options={{
                    tabBarLabel: "Test",
                    title: "test",
                    // href: null,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="virus" size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    title: "Home",
                    // href: null,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="news/index"
                options={{
                    tabBarLabel: "News",
                    title: "News",
                    // href: null,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="newspaper" size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="storage"
                options={{
                    tabBarLabel: "Storage",
                    title: "Storage",
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="archive" size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    )

}

// import { NativeTabs } from 'expo-router/unstable-native-tabs';
//
// export default function Layout() {
//     return (
//         <NativeTabs>
//             <NativeTabs.Trigger name="profile" />
//             <NativeTabs.Trigger name="news/index" />
//         </NativeTabs>
//     );
// }
