import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function ROIUpdateContact(props){
    const id = props.route.params.noteid;
    const [note, setNote] = useState({
        name: props.route.params.contactName,
        phone: props.route.params.contactPhone,
        dept: props.route.params.contactDept,
        addrStr: props.route.params.contactAddrStr,
        addrCty: props.route.params.contactAddrCty,
        addrState: props.route.params.contactAddrState,
        addrZip: props.route.params.contactAddrZip,
        addrCntry: props.route.params.contactAddrCntry,
    });
    const navigation = props.navigation;

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
        fetch('http://localhost:3000/note/' + id,{
            method: 'PUT',
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
            <TextInput onChangeText={updateName} value={note.name}/>
            <TextInput onChangeText={updatePhone} value={note.phone}/>
            <TextInput onChangeText={updateDept} value={note.dept}/>
            <TextInput onChangeText={updateCntry} value={note.addrCntry}/>
            <TextInput onChangeText={updateState} value={note.addrState}/>
            <TextInput onChangeText={updateZip} value={note.addrZip}/>
            <TextInput onChangeText={updateStreet} value={note.addrStr}/>
            <TextInput onChangeText={updateCty} value={note.addrCty}/>
            <Button onPress={saveNote} title={"Save"}/>
        </View>
    )
}