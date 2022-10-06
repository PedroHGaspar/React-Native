import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { CatalogoScreen } from './CatalogoScreen';
import { PerfilContext } from './contexts/PerfilContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [perfil, setPerfil] = useState(null);

  return (
    <PerfilContext.Provider value={[perfil, setPerfil]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F03D39',
              },
              headerTintColor: '#ffffff',
            }}
          />
          <Stack.Screen
            name="Carrinho"
            component={CatalogoScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F03D39',
              },
              headerTintColor: '#ffffff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PerfilContext.Provider>
  );
}
