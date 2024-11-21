import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

function ContactView({ id, name, phone, dept, addrStr, addrCty, addrState,
                         addrZip, addrCntry, navigation }) {

    function gotoUpdate() {
        navigation.navigate("UpdateNote", {
            noteid:id,
            contactName: name,
            contactPhone: phone,
            contactDept: dept,
            contactAddrStr: addrStr,
            contactAddrCty: addrCty,
            contactAddrState: addrState,
            contactAddrZip: addrZip,
            contactAddrCntry: addrCntry,
        })
    }

    return (
        <>
            <View style={styles.noteViewContainer}>
                <TouchableOpacity onPress={gotoUpdate} >
                    <Text>{name}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default function ROIContactList(props) {
    const [notes, setNotes] = useState([]);
    const navigation = props.navigation;

    useFocusEffect(
        React.useCallback(function() {
            fetch('http://localhost:3000/notes')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    setNotes(data);
                });
        },[]))


    const presentableNotes = [];
    for(let i = 0; i < notes.length; i++) {
        presentableNotes.push(
            <ContactView id={i} name={notes[i].name}
                         phone={notes[i].phone}
                         addrCntry={notes[i].addrCntry}
                         addrStr={notes[i].addrStr}
                         addrZip={notes[i].addrZip}
                         addrState={notes[i].addrState}
                         addrCty={notes[i].addrCty}
                         dept={notes[i].dept}
                         navigation={navigation} />
        )
    }

    const add = () => {
        navigation.navigate("ROIAddContact")
    };

    return (
        <View style={styles.container}>
            <View style={styles.notesContainer}>
                {presentableNotes}
            </View>
            <TouchableOpacity onPress={add}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    noteViewContainer: {
        width: '100%',
        paddingTop: '1em',
        paddingBottom: '1em',
        backgroundColor: '#eeaa22',
        marginBottom: '1em',
    },
    labelContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
    }
});
