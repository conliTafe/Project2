import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function ROIAddContact(props){
    const navigation = props.navigation;
    const [note, setNote] = useState('');
    function  updateName(data){
        setNote({
            name: data,
            phone: note.phone,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updatePhone(data){
        setNote({
            name: note.name,
            phone: data,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updateDept(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: data,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updateCntry(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: data,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updateState(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: data,
            addrCty: note.addrCty        })
    }
    function updateZip(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: data,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updateStreet(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: note.dept,
            addrStr: data,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: note.addrCty        })
    }
    function updateCty(data){
        setNote({
            name: note.name,
            phone: note.phone,
            dept: note.dept,
            addrStr: note.addrStr,
            addrZip: note.addrZip,
            addrCntry: note.addrCntry,
            addrState: note.addrState,
            addrCty: data
        })
    }
    function saveNote(){
        fetch('http://192.168.176.113:3000/contact/',{
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            }
        } ).then(function (response){
          if(response.status === 200){
              navigation.navigate('Contact List');
          }else{
              console.log("error on update note");
          }
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateName}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Phone"
                    placeholderTextColor="#003f5c"
                    onChangeText={updatePhone}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Department"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateDept}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Street"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateStreet}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="City"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateCty}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="State"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateState}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Zip"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateZip}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Country"
                    placeholderTextColor="#003f5c"
                    onChangeText={updateCntry}/>
            </View>

            <Button color="#c64c38" onPress={saveNote} title={"Save"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        backgroundColor:'#D9D9D9',
        borderRadius:25,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        padding:10
        }
});