import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  FlatList,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
//Para pegar as imagens
import * as ImagePicker from 'expo-image-picker';
//Hooks
import { useState, useEffect, useContext } from 'react';
//Icone da imagem (Adicionar foto)
import { FontAwesome } from '@expo/vector-icons';
//Contexto
import { Ionicons } from '@expo/vector-icons'; 
import { ListaAmigos } from './Componentes/ListaAmigos';


import { firebaseConfig } from './FirebaseConfig';
import * as firebase from 'firebase';
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}
/*
Componente para adicionar novas memorias, ou seja, 
pega as informações e joga pro objeto memorias
*/
export function Amigos() {

  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    carregarMensagensDoFirebase();
  }, []);

  const carregarMensagensDoFirebase = () => {
    firebase
      .database()
      .ref('Publicacoes/')
      .on('value', (snapshot) => {
        const mensagens = [];
        snapshot.forEach((mensagem) => {
          mensagens.unshift(mensagem.val());
        });

        setPublicacoes(mensagens);
        console.log(mensagens)
      });
  };
return (
    <View style={styles.container}>


      <FlatList
        data={publicacoes}
        renderItem={({ item }) => (
          <ListaAmigos
            foto={item.foto}
            nome={item.nome}
            mensagem={item.mensagem}
            cidade={item.cidade}
            telefone={item.telefone}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#0DC4AD',
    borderRadius: 6,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
