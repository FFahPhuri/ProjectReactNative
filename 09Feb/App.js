import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailScreen from "./screens/DetailScreen";
import MenuScreen from "./screens/MenuScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#654321" },
        headerTintColor: "#FFFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "หน้าหลัก" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "เกี่ยวกับเรา" }}
      />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#654321" },
        headerTintColor: "#FFFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContentOptions={{
          activeTintColor: "#0000FF",
          ItemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <MenuScreen {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeStack} />
        <Drawer.Screen name="ProductScreen" component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
