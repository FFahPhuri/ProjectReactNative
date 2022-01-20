import React from 'react'
import { View, Text, Button } from 'react-native'
//import WebView from 'react-native-webview'
//import WebViewExample from './components/WebViewExample'
//import WebViewLoading from './components/WebViewLoading'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    //<WebViewExample/>
    //<WebViewLoading/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#654321',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'หน้าหลัก' }} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'เกี่ยวกับเรา' }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
