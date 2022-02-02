import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homescreen from "./screens/HomeScreen";
import Settingscreen from "./screens/SettingScreen";
import Profilescreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#654321" },
        //Set Header Text Color
        headerTintColor: "#fff",
        //Set Header Test Style
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        //set header title
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="Settingscreen"
        component={Settingscreen}
        //set header title
        options={{ title: "Setting Page" }}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#654321" },
        //Set Header Text Color
        headerTintColor: "#fff",
        //Set Header Test Style
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Settingscreen"
        component={Settingscreen}
        //set header title
        options={{ title: "Setting Page" }}
      />
      <Stack.Screen
        name="Profilescreen"
        component={Profilescreen}
        //set header title
        options={{ title: "Profile Page" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? (
                <Image
                  source={require("./assets/logo1.png")}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              ) : (
                <Image
                  source={require("./assets/logo2.png")}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              );
            } else if (route.name === "Setting") {
              iconName = focused ? (
                <Image
                  source={require("./assets/logo1.png")}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              ) : (
                <Image
                  source={require("./assets/logo3.png")}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              );
            }
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#654321",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Setting" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
