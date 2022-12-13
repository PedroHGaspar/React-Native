//Para utilizar a navegação entre as telas
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//componentes de cada tela
import { NovoArtigo } from './NovoArtigoScreen';
import { Artigos } from './ArtigosScreen';
//firebase
import { firebaseConfig } from './FirebaseConfig';
import * as firebase from 'firebase';
//icons

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}


export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        tabBarOptions={{
          activeTintColor: '#1b46ae',
          inactiveTintColor: 'grey',
        }}>
        <Stack.Screen
          name="Wiki"
          component={Artigos}
          options={{
            headerStyle: {
              backgroundColor: '#1b46ae',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              letterSpacing: 2,
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Criar Artigo"
          component={NovoArtigo}
          options={{
            headerStyle: {
              backgroundColor: '#1b46ae',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              letterSpacing: 2,
              fontWeight: 'bold',
            },
            
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
