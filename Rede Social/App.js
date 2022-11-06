  //Para utilizar a navegação entre as telas
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  //componentes de cada tela
  import { Posts } from './PostsScreen';
  import { AddPost } from './AddPostScreen';
  import { Amigos } from './AmigosScreen';
  import {Publicacao} from './Publicacao';
  //Contexto
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  //Hooks
  import FontAwesome from '@expo/vector-icons/FontAwesome';
  import { MaterialIcons } from '@expo/vector-icons';
  import { useState } from 'react';


  export default function App() {
    const Tab = createBottomTabNavigator();

    //usada para o context
    const [memorias, setMemorias] = useState([]);

    //Usada para mudar o estilo do cabeçalho
    // const screenOptions = {
    //   headerStyle: {
    //     backgroundColor: '#0DC4AD',
    //   },
    //   headerTintColor: 'white',
    //   headerTitleStyle: {
    //     letterSpacing: 2,
    //     fontWeight: 'bold',
    //   },
    // };
    //ACHAR UM JEITO DE USAR O SCREENOPTIONS ACIMA AO INVES DE COPIAR O ESTILO TODO

    return (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#0DC4AD',
              inactiveTintColor: '#787A79',
            }}>
            <Tab.Screen
              name="Posts"
              component={Posts}
              options={{
                tabBarLabel: 'Feed',
                headerStyle: {
                  backgroundColor: '#0DC4AD',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  letterSpacing: 2,
                  fontWeight: 'bold',
                },
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Amigos"
              component={Amigos}
              options={{
                headerStyle: {
                  backgroundColor: '#0DC4AD',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  letterSpacing: 2,
                  fontWeight: 'bold',
                },
                tabBarLabel: 'Amigos',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="group" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Adicionar Nova Postagem"
              component={AddPost}
              options={{
                headerStyle: {
                  backgroundColor: '#0DC4AD',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  letterSpacing: 2,
                  fontWeight: 'bold',
                },
                tabBarLabel: 'Publicar',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="plus" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
