import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const FirstPage = ({ navigation }) => {
    const [InputName, setInputName] = useState('');
    return ( 
        <View style = { styles.container } >
        
        <Text style = { styles.heading } > REACT - NATIVE PASS VALUE FROM ONE SCREEN </Text> 
        <Text style = { styles.textStyle } > Please insert your name to pass it to second screen </Text> 
        <TextInput 
        style = { styles.inputStyle }
        placeholder = "Enter Your Name"
        onChangeText = {
            (InputName) => { setInputName(Name) } }
        /> 
        <Button title = "GO NEXT"
        onPress = {() => navigation.navigate('SecondPage', { name: InputName }) }
        /> 
        </View>
    );
};

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },

    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
});