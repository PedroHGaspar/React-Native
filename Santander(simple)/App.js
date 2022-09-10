import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { CaixaEletronico } from './conta.js';

export default function App() {
  const [caixa, setCaixa] = useState(new CaixaEletronico(7832.92));
  const [valorDigitado, setValorDigitado] = useState(0);


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={{
            width: 271,
            height: 211,
          }}
          source={{
            uri: 'https://executivedigest.sapo.pt/wp-content/uploads/2021/05/img_900x5602018_03_23_10_18_00_328537.jpg',
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.letras}>SALDO ATUAL NA CONTA</Text>
        <Text style={styles.saldo}>${caixa.saldo.toFixed(2)}</Text>
        <Text style={styles.legenda}>
          Digite o valor abaixo e escolha uma das operações bancárias:
        </Text>

        <TextInput
          placeholder="0,00"
          keyboardType="numeric"
          style={styles.inputValor}
          onChangeText={setValorDigitado}>
          </TextInput>

        <Text
          style={styles.botao1}
          onPress={() => {
            setCaixa(
              new CaixaEletronico(caixa.saque(valorDigitado), valorDigitado)
            );
          }}>
          SACAR
        </Text>

        <Text
          style={styles.botao2}
          onPress={() => {
            setCaixa(
              new CaixaEletronico(caixa.deposito(valorDigitado), valorDigitado)
            );
          }}>
          DEPOSITAR
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  botao1: {
    marginTop: 60,
    textAlign: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#C71A2B',
    width: 250,
    padding: 10,
    borderRadius: 7,
    color: '#ffffff',
  },
  botao2: {
    marginTop: 20,
    textAlign: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#C71A2B',
    width: 250,
    padding: 10,
    borderRadius: 7,
    color: '#ffffff',
  },
  letras: {
    marginTop: -30,
    color: '#9D9FA3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  legenda: {
    width: 200,
    marginTop: 70,
    fontWeight: 'bold',
  },
  saldo: {
    paddingTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputValor: {
    marginTop: 50,
    borderColor: 'black',
    backgroundColor: '#DADDE4',
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    borderRadius: 3,
  },
});
