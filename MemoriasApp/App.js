//Para utilizar a navegação entre as telas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//componentes de cada tela
import { Memorias } from './MemoriasScreen';
import { AddMemoria } from './AddMemoriaScreen';
//Contexto
import { MemoriasContext } from './Contexto/MemoriasContext';
//Hooks
import { useState } from 'react'; 

export default function App() {
  const Stack = createNativeStackNavigator();
  
  //usada para o context
  const [memorias, setMemorias] = useState([]);

  //Usada para mudar o estilo do cabeçalho
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#0DC4AD',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      letterSpacing: 2,
      fontWeight: 'bold',
    },
  };

  return (
    <MemoriasContext.Provider value={[memorias, setMemorias]}>
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
          name="Memórias"
          component={Memorias}
          options={screenOptions}
        />
        <Stack.Screen
          name="Adicionar Nova Memoria"
          component={AddMemoria}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </MemoriasContext.Provider>
  );
}
