import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, Button } from "react-native";

const ButtonExample = () => {
    const onPressAlert = ()=>{
        alert('Hello');
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Button Example</Text>
                <Button
                onPress = {onPressAlert}
                title = "Click Me"
                color = "#8a8bf4"

                />

            </View>

        </SafeAreaView>
    )
}

export default ButtonExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

