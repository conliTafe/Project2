import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function ROIHome(props) {
    const navigation = props.navigation;
    const openList = () => {
        navigation.navigate("ROIContactList")
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Red Opal Innovations</Text>
            <Image style={styles.logo} source={require('./assets/contactList.png')}/>
            <Button onPress={openList} title={"Open contact list"}/>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            justifyContent: 'center',
            height: 350,
            width: 350,
            resizeMode: 'contain',
            marginBottom: 20,
        },
        title:{
            fontWeight: "bold",
            fontSize:35,
            color:"black",
            marginBottom: 40,
        }
    });

