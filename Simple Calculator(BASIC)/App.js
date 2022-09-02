import { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResultado] = useState(0);

  somar = () => {
    setResultado(Number(valorA) + Number(valorB));
  };
  subtrair = () => {
    setResultado(Number(valorA) - Number(valorB));
  };
  dividir = () => {
    setResultado(Number(valorA) / Number(valorB));
  };
  multiplicacao = () => {
    setResultado(Number(valorA) * Number(valorB));
  };

  return (
    <View style={styles.container}>
      <Text>Minha Calculadora</Text>

      <TextInput
        placeholder="Informe o 1º valor: "
        onChangeText={setValorA}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Informe o 2º valor: "
        onChangeText={setValorB}
        keyboardType="numeric"
      />

      <Button style={styles.botao} onPress={somar} title="+" />
      <Button style={styles.botao} onPress={subtrair} title="-" />
      <Button style={styles.botao} onPress={dividir} title="/" />
      <Button style={styles.botao} onPress={multiplicacao} title="*" />

      <Text>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius:200,
    background: 'black',
  },
});
