import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Filmes } from './Filmes';

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
        <Stack.Screen name="Perfil" component={Filmes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}