import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

import { View, Image, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for navigation drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={(require = "C:/rnproject/assets/drawerWhite.png")}
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
      screeOptions={{
        //set header color
        headerStyle: {
          backgroudColor: "#654321",
          //set header text color
          headerTintColor: "#fff",
          //set Header Text weight
          headerTitleStyle: { fontWeight: "bold" },
        },
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
      screeOptions={{
        //set header color
        headerStyle: {
          backgroudColor: "#654321",
          //set header text color
          headerTintColor: "#fff",
          //set Header Text weight
          headerTitleStyle: { fontWeight: "bold" },
        },
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
