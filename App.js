import { StyleSheet, Text, View } from 'react-native';
// Navigation
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import components
import Home from './Components/Home.js/Home';
import PostDetails from './Components/PostDetails/PostDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator
          initialRoute="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notifications" component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
