import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

// import Ionicons from "react-native-vector-icons/Ionicons";
const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreens = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="register" iconName="ios-document-attach" onPress={() => alert('Register')} />
      </HeaderButtons>
      ),
      headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('Search ทำไมบ้าบอที่สุด')} />
      </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Ionicons name="home" size={30} color="skyblue" /> */}
      <Text>หน้าหลัก</Text>
      <Button
        title="Go To About"
        onPress={() =>
          navigation.navigate("AboutScreen", {
            email: "ch.phurichaya_st@tni.ac.th",
          })
        }
      />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
