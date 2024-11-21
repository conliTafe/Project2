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
        <Stack.Screen name="Welcome to ROI" component={HomeScreen} />
          <Stack.Screen name="UpdateNote" component={ROIUpdateContact} />
          <Stack.Screen name="ROIHome" component={ROIHome} />
          <Stack.Screen name="ROIContactList" component={ROIContactList} />
          <Stack.Screen name="ROIAddContact" component={ROIAddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//HomesScreen navigation={...} />