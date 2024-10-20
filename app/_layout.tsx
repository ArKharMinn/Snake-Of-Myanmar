import { Stack } from "expo-router";
import {Provider} from 'react-redux'
import store from '@/redux/store'

export default function RootLayout() {
  return (
  <Provider store={store}>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="detail/[id]" options={{headerShown:false}}/>
    </Stack>
  </Provider>
  );
}
