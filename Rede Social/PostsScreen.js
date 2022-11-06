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
  nome,
  mensagem,
  cidade,
  data,
  telefone,
  navigation,
}) {
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

  

  // const [memorias, setMemorias] = useContext(PostsContext);

  return (
    <View style={styles.container}>


      <FlatList
        data={publicacoes}
        renderItem={({ item }) => (
          <ListaPosts
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

