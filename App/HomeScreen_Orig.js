import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';

function NoteView({ id, title, description, navigation }) {

    function gotoUpdate() {
        navigation.navigate("UpdateNote", {
            noteid:id,
            noteTitle: title,
            noteContent: description
        })
    }

    return (
        <>
        <View style={styles.noteViewContainer}>
            <TouchableOpacity onPress={gotoUpdate} >
                <Text>{title}</Text>
                <Text>{description}</Text>
            </TouchableOpacity>
        </View>
        </>
    )

}

//Alt for anonymous function

function HomeScreen(props) {
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
            <NoteView id={i} title={notes[i].title}
                description={notes[i].content}
                navigation={navigation} />
        )
    }


    return (
        <View style={styles.container}>
            <View>
                <Text>Welcome to ROI</Text>
            </View>
            <View style={styles.labelContainer}>
            <Text aria-label="Label for Username"  nativeID="labelUsername">Username</Text>
             </View>
            <View style={styles.notesContainer}>
                {presentableNotes}
            </View>
            <TouchableOpacity>
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
  

module.exports = { HomeScreen, NoteView }; 