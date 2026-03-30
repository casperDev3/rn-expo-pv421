import {Stack} from 'expo-router';
import {Provider} from 'react-redux'
import {store} from '../store/store'

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="news/[id]" options={{headerShown: false}}/>
            </Stack>
        </Provider>
    );
}
