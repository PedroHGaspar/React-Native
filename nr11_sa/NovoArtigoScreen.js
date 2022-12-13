//Components
import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  StyleSheet,
  Vibration,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import { Feed } from './FeedScreen';
//firebase
import * as firebase from 'firebase';
//icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
//Hooks
import { useEffect, useState } from 'react';

export function NovoArtigo({ navigation }) {
  //const [foto, setFoto] = useState(null);

  const [novoArtigo, setnovoArtigo] = useState({
    mensagem: null,
    foto: null,
    titulo: null,
  });


  //Arrumar para atualizar a tela okay
  const limparInputs = () => {
    setnovoArtigo({
      titulo: 'null',
      foto: 'null',
      mensagem: 'null',
    });
  };

  const publicarMensagemNoFirebase = () => {
    console.log(novoArtigo);
    firebase
      .database()
      .ref('Wiki/')
      .push(novoArtigo)
      .then(() => {
        console.log('salvou');
        
        
      })
      .catch((error) => {
        console.log('Erro ao salvar mensagem ', error);
      });

      limparInputs();
      navigation.navigate('Wiki');
      
  };

  //Galeria
  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, //Habilitar edicao
      aspect: [4, 3], //Tamanho da foto
      quality: 1, //Qualidade da foto
    });

    //condicional caso o usario desista de escolher a foto
    if (!result.cancelled) {
      uploadNoFirebase(result);
    }

    //setnovoArtigo({ ...novoArtigo, foto: result.uri });
    //console.log(novoArtigo);
  };

  const uploadNoFirebase = async (foto) => {
    const { uri } = foto;
    const imagem = await fetch(uri);
    const arquivoBlob = await imagem.blob();

    const randomName = (Math.random() + 10).toString(36).substring(2);

    const imageRef = firebase
      .storage()
      .ref(`biblioteca/foto-${randomName}.jpg`)
      .put(arquivoBlob)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      });

    imageRef.then((url) => {
      alert('Fez upload');
      setnovoArtigo({ ...novoArtigo, foto: url });
    });
  };

  return (
    <View style={styles.container}>
    <View>
      <View style={styles.header}>
        <FontAwesome5 name="info-circle" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          onChangeText={(titulo) =>
            setnovoArtigo({
              ...novoArtigo,
              titulo: titulo,
            })
          }
          maxLength={20}
          placeholder="Título"
          placeholderTextColor="black"
        />
      </View>
      <Pressable
        style={styles.botaoAddFoto}
        title="Escolha uma foto"
        onPress={escolherImagem}>
        <View style={styles.conteudoAddFoto}>
          <FontAwesome name="image" size={24} color="black" />
          <Text style={styles.textInput}>Foto</Text>
        </View>
      </Pressable>
      <View style={styles.descricao}>
        <Entypo name="menu" size={31} color="black" />
        <TextInput
          style={styles.textInputTexto}
          multiline={true}
          maxLength={400}
          onChangeText={(mensagem) =>
            setnovoArtigo({
              ...novoArtigo,
              mensagem: mensagem,
            })
          }
          placeholder="Descrição do artigo"
          placeholderTextColor="black"
        />
      </View>
      </View>
      <Pressable style={styles.botao} onPress={publicarMensagemNoFirebase}>
        <Text style={styles.textoBotao}>CRIAR ARTIGO</Text>
      </Pressable>
      <Pressable style={styles.footerStyle}>
          <FontAwesome5 name="book-open" size={22} color="white" />
          <Text style={styles.tabStyle}>Wiki</Text>
        </Pressable> 
    </View>
  );
}
//{foto && <Image style={styles.imagem} source={{ uri: foto }} />}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    //justifyContent: '',
    //marginTop: 30,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    marginTop: 30,
  },
  descricao: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    width: 280,
    marginRight:55,
    marginTop: 20,
    //marginBottom:50,
  },

  //Styles do botao para buscar foto
  textInput: {
    height: 45,
    width: 280,
    // marginVertical: 12,
    borderwidth: 1,
    // borderRadius: 10,
    borderBottomWidth: 1,
    padding: 14,
    fontColor: 'black',
    backgroundColor: '#edeff1',
    marginLeft: 20,
    alignItems: 'baseline',
  },
  conteudoAddFoto: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  botaoAddFoto: {
    // alignItems: 'flex-start'
    display: 'flex',
    //width: 120,
    marginTop: 20,
    // borderBottomWidth:1,
    alignItems: 'center',
    padding: 5,
  },
  //Styles do botao Adicionar
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#1b46ae',
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
  textInputTexto: {
    height:300,
    width: 280,
    // marginVertical: 12,
    borderwidth: 1,
    // borderRadius: 10,
    borderBottomWidth: 1,
    fontColor: 'black',
    backgroundColor: '#edeff1',
    padding: 14,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,    
  },
  footerStyle: {
    
    backgroundColor: '#1b46ae',
    width: 400,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    bottom: 0

  },

  tabStyle: {
    
    //marginTop: 5,
    //fontWeight: '700',
  //letterSpacing: 1.4,
    fontSize: 16,
    marginBottom: 1,
    color: 'white'
  },
});
