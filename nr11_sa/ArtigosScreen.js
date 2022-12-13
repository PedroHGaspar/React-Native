import {
  View,
  Button,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { useEffect, useState } from 'react';
import { firebaseConfig } from './FirebaseConfig';
import * as firebase from 'firebase';
import { Entypo } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { ArtigoList } from './Componente/ArtigoList';

export function Artigos({ navigation }) {

  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    carregarMensagensDoFirebase();
  }, []);

  const carregarMensagensDoFirebase = () => {
    firebase
      .database()
      .ref('Wiki/')
      .on('value', (snapshot) => {
        const mensagens = [];
        snapshot.forEach((mensagem) => {
          mensagens.unshift(mensagem.val());
        });

        setArtigos(mensagens);
      });
  };

  
  return (
    <View style={styles.container}>
      
      <FlatList
        data={artigos}
        renderItem={({ item }) => (
          <ArtigoList
            foto={item.foto}
            titulo={item.titulo}
            mensagem={item.mensagem}
          />
        )}
      />
      <View style={styles.viewPA}>
      <Pressable style={styles.botaoSacar}
      onPress={() => navigation.navigate("Criar Artigo")}>
       <Entypo name="plus" size={30} color="white" />
      </Pressable> 
      </View>


      <Pressable style={styles.botaoDepositar}>
          <FontAwesome5 name="book-open" size={22} color="white" />
          <Text style={styles.tabStyle}>Wiki</Text>
        </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  
  },

  botaoSacar: {
    alignItems: 'center',
    backgroundColor: '#1b46ae',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    position: 'absolute',
    left: 100,
    bottom: 80
  },
  botaoDepositar: {
    
    backgroundColor: '#1b46ae',
    width: 400,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0

  },

  tabStyle: {
    marginTop: 5,
    //fontWeight: '700',
  //letterSpacing: 1.4,
    fontSize: 16,
    marginBottom: 1,
    color: 'white'
  },
});
