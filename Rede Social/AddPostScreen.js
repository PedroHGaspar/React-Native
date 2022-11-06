import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  StyleSheet,
  Vibration,
} from 'react-native';
//Para pegar as imagens
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
//Hooks
import { useState, useContext, useEffect } from 'react';
//Icone da imagem (Adicionar foto)
import { FontAwesome } from '@expo/vector-icons';
//Contexto
import { Ionicons } from '@expo/vector-icons';
import Publicacao from './Publicacao';
import { firebaseConfig } from './FirebaseConfig';
import * as firebase from 'firebase';

/*
Componente para adicionar novas memorias, ou seja, 
pega as informações e joga pro objeto memorias
*/
export function AddPost({ navigation }) {
  //Estados para pegar as informações inseridas

  // const [nome, setNome] = useState(null);
  // const [mensagem, setMensagem] = useState(null);
  // const [cidade, setCidade] = useState(null);
  // const [foto, setFoto] = useState(null);
  // const [telefone, setTelefone] = useState(null);
  // const [numeroCurtidas, setNumeroCurtidas] = useState(null);
  const [camera, setCamera] = useState(null);
  const [foto, setFoto] = useState(null);

  const [novaPublicacao, setNovaPublicacao] = useState({
    nome: null,
    mensagem: null,
    cidade: null,
    foto: null,
    telefone: null,
  });

  //Contexto onde ficara salvo as informações dos input
  // const [memorias, setMemorias] = useContext(PostsContext);

  //Usada para esperar o usuario escolher a foto, por isso Async(dessincronizado)

  useEffect(() => {
    solicitarPermissao();
  }, []);

  const tirarFoto = async () => {
    const imagem = await camera.takePictureAsync(null);
    setNovaPublicacao({ ...novaPublicacao, foto: imagem.uri });
  };

  solicitarPermissao = async () => {
    await Camera.requestCameraPermissionsAsync();
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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(nome) =>
            setNovaPublicacao({
              ...novaPublicacao,
              nome: nome,
            })
          }
          maxLength={20}
        />
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(telefone) =>
            setNovaPublicacao({
              ...novaPublicacao,
              telefone: telefone,
            })
          }
        />
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(cidade) =>
            setNovaPublicacao({
              ...novaPublicacao,
              cidade: cidade,
            })
          }
        />

        {!foto && (
          <Camera style={styles.imagem} ref={(ref) => setCamera(ref)}></Camera>
        )}
        {foto && <Image style={styles.imagem} source={{ uri: foto }} />}
        <Pressable
          style={styles.botaoAddFoto}
          title="Escolher/Tirar foto de perfil"
          onPress={tirarFoto}>
          <View style={styles.conteudoAddFoto}>
            <Text style={styles.textFoto}>Tirar Foto</Text>
          </View>

          <Text style={styles.pensamento}>O que você está pensando?</Text>
        </Pressable>
        <TextInput
          style={styles.textInputTexto}
          multiline={true}
          maxLength={400}
          onChangeText={(mensagem) =>
            setNovaPublicacao({
              ...novaPublicacao,
              mensagem: mensagem,
            })
          }
        />
      </View>
      <Pressable style={styles.botao} onPress={publicarMensagemNoFirebase}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </Pressable>
    </View>
  );
}
//EMPURRAR A PAG PRA CIMA AUTOMATICAMENTE QUANDO ABRIR O TECLADO-------------------
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  //Para os input
  textInput: {
    height: 40,
    width: 350,
    marginVertical: 12,
    borderwidth: 1,
    borderRadius: 10,
    padding: 10,
    fontColor: 'black',
    backgroundColor: '#A4A8BD',
  },
  textInputTexto: {
    height: 100,
    width: 350,
    marginVertical: 20,
    borderwidth: 1,
    borderRadius: 10,
    padding: 15,
    fontColor: 'black',
    backgroundColor: '#A4A8BD',
    textAlignVertical: 'top',
  },
  //Styles do botao para buscar foto
  imagem: {
    alignItems: 'center',
    height: 150,
    width: 250,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'gray',
    marginTop: 20,
  },
  conteudoAddFoto: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  botaoAddFoto: {
    width: 120,
    marginTop: 20,
  },
  textFoto: {
    marginLeft: 10,
    color: '#0DC4AD',
    fontWeight: '500',
  },

  //Styles do botao Adicionar
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#0DC4AD',
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
  },
  pensamento: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    paddingTop: 20,
    width: 500,
  },
});
