import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react';

export function AdicionarFilmes({ navigation }) {

  const [filme, setFilme] = useState({
    nome:null,
    imagemFilme:null,

  })

  adicionarFilme = () => {
    navigation.navigate('Filmes', {filme})
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#006478', '#004857']}
        style={styles.linearGradient}>

        <TextInput
          style={styles.input}
          placeholder="Nome do filme"
          onChangeText = {(nome) => setFilme({
            ...filme,
            nome : nome,
          })}
        />
        <TextInput
          style={styles.input}
          placeholder="Link da Imagem"
                    onChangeText = {(imagemFilme) => setFilme({
            ...filme,
            imagemFilme : imagemFilme,
          })}
        />

        <Text style={styles.botaozinho}
        onPress={adicionarFilme}>
        Adicionar
        </Text>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    flex: 1,
  },
    input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    color: 'white',
    padding:10,
    backgroundColor:'#ffffff',
  },
    botaozinho: {
    height: 40,
    width: 150,
    margin: 12,
    color: 'white',
    padding:10,
    backgroundColor:'#01acad',
    borderRadius:10,
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  linearGradient: {
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 5,
    height: '102%',
    width: '102%',
    flex: 1,
  },
});
