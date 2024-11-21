import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen, NoteView } from './HomeScreen.js';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROIUpdateContact from './ROIUpdateContact.js';
import ROIHome from "./ROIHome";
import ROIContactList from "./ROIContactList";
import ROIAddContact from "./ROIAddContact";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="Welcome To ROI" component={ROIHome} />
          <Stack.Screen name="Update Contact" component={ROIUpdateContact} />
          <Stack.Screen name="Contact List" component={ROIContactList} />
          <Stack.Screen name="Add Contact" component={ROIAddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//HomesScreen navigation={...} />