import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';

let valorInicial = '7.320,92';

export default function App() {
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
        <Text style={styles.saldo}>${valorInicial}</Text>
        <Text style={styles.legenda}>
          Digite o valor abaixo e escolha uma das operações bancárias:
        </Text>

        <TextInput placeholder=" 0,00" style={styles.inputValor}></TextInput>

        <Text style={styles.botao1}>SACAR</Text>
        <Text style={styles.botao2}>DEPOSITAR</Text>
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
    borderBottomWidth: 0.5,
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
