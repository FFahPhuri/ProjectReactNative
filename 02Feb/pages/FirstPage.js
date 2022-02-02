import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Logo from "./Logo";

import { styles } from "../components/style";

const FirstPage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Logo />,
      headerRight: () => (
        <Button onPress={() => alert("Test")} title="Register" />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
          <Ionicons name="home" size={30} color="#654321" />
          <Text style={styles.textTopStyle}>This is the first page</Text>

          <View>
            <Button
              title="Go to Second Page"
              onPress={() => navigation.navigate("SecondPage")}
            />
            <Button
              title="Go to Third Page"
              onPress={() => navigation.navigate("ThirdPage")}
            />
          </View>
          <View style={{ bottom: 10, position: "absolute" }}>
            <Text style={styles.textBottomStyle}>
              Thai-Nichi Institute of Technology
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
