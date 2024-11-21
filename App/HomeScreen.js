import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
import { useState } from 'react';
import React from 'react';


function NoteView({ id, title, description, navigation }) {
}

function HomeScreen(props) {
    const navigation = props.navigation;

    const onPressLogin = () => {
        navigation.navigate("ROIHome")
    };
    const onPressForgotPassword = () => {
// Do something about forgot password operation
    };
    const onPressSignUp = () => {
// Do something about signup operation
    };

    const [state,setState] = useState({
        email: '',
        password: '',
    })
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bckrnd} source={require('./assets/background.png')}>
                <Image style={styles.logo} source={require('./assets/ROILogo.png')} />
                <Text style={styles.title}>Welcome To ROI</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setState({email:text})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setState({password:text})}/>
                </View>
                <TouchableOpacity
                    onPress = {onPressForgotPassword}>
                    <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {onPressLogin}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {onPressSignUp}>
                    <Text style={styles.forgotAndSignUpText}>Signup</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bckrnd: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        justifyContent: 'center',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize:40,
        color:"black",
        marginBottom: 40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
  });

module.exports = { HomeScreen, NoteView }; 