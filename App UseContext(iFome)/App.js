import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { HomeScreen } from './HomeScreen';
import { CarrinhoScreen } from './CarrinhoScreen';
import { CarrinhoContexto } from './contextos/CarrinhoContexto';

const Stack = createNativeStackNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContexto.Provider value={[carrinho, setCarrinho]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoContexto.Provider>
  );
}
