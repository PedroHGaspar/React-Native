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
import { useContext, useState, useEffect } from 'react';
//componentes
import { ListaPosts } from './Componentes/ListaPosts';
//Contexto
import { PostsContext } from './Contexto/PostsContext';
//Firebase
import { firebaseConfig } from './FirebaseConfig';
import * as firebase from 'firebase';

import { Publicacao } from './Publicacao';

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}

export function Posts({
  foto,
  titulo,
  descricao,
  localizacao,
  data,
  navigation,
}) {
  const [publicacoes, setPublicacoes] = useState([]);
  const [novaPublicacao, setNovaPublicacao] = useState({ texto: null });

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
      });
  };

  const publicarMensagemNoFirebase = () => {
    firebase
      .database()
      .ref('Publicacoes/')
      .push(novaPublicacao)
      .then((data) => {
        console.log('salvou! ', data);
      })
      .catch((error) => {
        console.log('Erro ao salvar mensagem ', error);
      });
  };

  

  const [memorias, setMemorias] = useContext(PostsContext);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Adicionar Nova Postagem')}>
        <Text style={styles.textoBotao}>Publicar</Text>
      </Pressable>

      <FlatList
        data={memorias}
        renderItem={({ item }) => (
          <ListaPosts
            foto={item.foto}
            titulo={item.titulo}
            data={item.data}
            descricao={item.descricao}
            localizacao={item.localizacao}
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

//----------------------------------------------------------------------------------

//   return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container2}>
//           <View >
//             <FlatList
//               data={publicacoes}
//               renderItem={({ item }) => <Publicacao texto={item.texto} />}
//             />
//           </View>
//         </ScrollView>

//         <View style={styles.container3}>
//         <TextInput
//           style={styles.input}
//           onChangeText={(mensagem) =>
//             setNovaPublicacao({ ...novaPublicacao, texto: mensagem })
//           }
//           placeholder="Digite aqui sua mensagem"
//         />
//         <Button
//           title="Publicar mensagem"
//           onPress={() => publicarMensagemNoFirebase()}
//         />
//         </View>
//       </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 30,
//     paddingHorizontal: 10,
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   input: {
//     padding: 14,
//     borderWidth: 1,
//     marginBottom: 8,
//     borderColor: '#cecece',
//   },
//   container2:{
//     height: '85%'
//   },
//   container3:{
//     height: '15%'
//   }
// });


//----------------------------------------------------------------------------------

