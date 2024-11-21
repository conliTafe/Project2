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
        fetch('http://localhost:3000/note/',{
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            }
        } ).then(function (response){
          if(response.status === 200){
              navigation.navigate('ROIContactList');
          }else{
              console.log("error on update note");
          }
        });
    }
    return (
        <View>
            <TextInput onChangeText={updateName} placeholder={"Name"}/>
            <TextInput onChangeText={updatePhone} placeholder={"Phone"}/>
            <TextInput onChangeText={updateDept} placeholder={"Department"}/>
            <TextInput onChangeText={updateCntry} placeholder={"Country"}/>
            <TextInput onChangeText={updateState} placeholder={"State"}/>
            <TextInput onChangeText={updateZip} placeholder={"Zip"}/>
            <TextInput onChangeText={updateStreet} placeholder={"Street"}/>
            <TextInput onChangeText={updateCty} placeholder={"City"}/>
            <Button onPress={saveNote} title={"Save"}/>
        </View>
    )
}