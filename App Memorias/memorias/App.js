// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/
 
import 'react-native-gesture-handler';
 
import React from 'react';
 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
import Memoria from './Memoria';
import Home from './Home';
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={Memoria}
          options={{
            title: 'Adicionar Memória', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={Home}
          options={{
            title: 'Memórias', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;