import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "../components/style";

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
