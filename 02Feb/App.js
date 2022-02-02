import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import CustomSidebarMenu from "./pages/CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the Navigation Drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require("C:/rnproject/assets/drawerWhite.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#654321" },
        //Set Header Text Color
        headerTintColor: "#fff",
        //Set Header Test Style
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        //set header title
        options={{ title: "First Page" }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#654321" },
        //Set Header Text Color
        headerTintColor: "#fff",
        //Set Header Test Style
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: "Second Page" }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: "Third Page" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#654321",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="FirstPage"
          component={firstScreenStack}
          options={{ drawerLabel: "First page Option" }}
        />
        <Drawer.Screen
          name="SecondPage"
          component={secondScreenStack}
          options={{ drawerLabel: "Second page Option" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
