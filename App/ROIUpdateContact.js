import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function ROIUpdateContact(props){
    const id = props.route.params.noteid;
    const [contact, setContact] = useState({
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
        setContact({
            name: data,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updatePhone(data){
        setContact({
            name: contact.name,
            phone: data,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updateDept(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: data,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updateCntry(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: data,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updateState(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: data,
            addrCty: contact.addrCty        })
    }
    function updateZip(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: data,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updateStreet(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: data,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: contact.addrCty        })
    }
    function updateCty(data){
        setContact({
            name: contact.name,
            phone: contact.phone,
            dept: contact.dept,
            addrStr: contact.addrStr,
            addrZip: contact.addrZip,
            addrCntry: contact.addrCntry,
            addrState: contact.addrState,
            addrCty: data
        })
    }
    function saveContact(){
        fetch('http://localhost:3000/contact/' + id,{
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json"
            }
        } ).then(function (response){
          if(response.status === 200){
              navigation.navigate('Contact List');
          }else{
              console.log("error on update contact");
          }
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.name}
                    onChangeText={updateName}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.phone}
                    onChangeText={updatePhone}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.dept}
                    onChangeText={updateDept}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.addrStr}
                    onChangeText={updateStreet}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.addrCty}
                    onChangeText={updateCty}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.addrState}
                    onChangeText={updateState}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.addrZip}
                    onChangeText={updateZip}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={contact.addrCntry}
                    onChangeText={updateCntry}/>
            </View>

            <Button color="#c64c38" onPress={saveContact} title={"Save"}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: '2em',
        paddingLeft: '2em',
        paddingRight: '2em',
        justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        backgroundColor:'#D9D9D9',
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    }
});