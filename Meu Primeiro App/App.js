import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Filmes } from './Filmes';
import { Jogos } from './Jogos';
import {AdicionarFilmes} from './AdicionarFilmes'



export default function App() {
  const Stack = createNativeStackNavigator();  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerStyle:{
            backgroundColor: '#000000'
          },
          headerTintColor: '#ffffff'
        }}/>
        <Stack.Screen name="Filmes" component={Filmes} 
                options={{
          headerStyle:{
            backgroundColor: '#000000'
          },
          headerTintColor: '#ffffff'
        }}/>
        <Stack.Screen name="Jogos" component={Jogos} 
                options={{
          headerStyle:{
            backgroundColor: '#000000'
          },
          headerTintColor: '#ffffff'
        }}/>
        <Stack.Screen name="AdicionarFilmes" component={AdicionarFilmes} 
                options={{
          headerStyle:{
            backgroundColor: '#000000'
          },
          headerTintColor: '#ffffff'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}