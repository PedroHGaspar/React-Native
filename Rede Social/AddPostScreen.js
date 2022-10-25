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
  //Hooks
  import { useState, useContext } from 'react';
  //Icone da imagem (Adicionar foto)
  import { FontAwesome } from '@expo/vector-icons';
  //Contexto
  import { PostsContext } from './Contexto/PostsContext';
  import { Ionicons } from '@expo/vector-icons'; 
  
  /*
  Componente para adicionar novas memorias, ou seja, 
  pega as informações e joga pro objeto memorias
  */
  export function AddPost({ navigation }) {
    //Estados para pegar as informações inseridas
    const [titulo, setTitulo] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [localizacao, setLocalizacao] = useState(null);
    const [foto, setFoto] = useState(null);
    const [data, setData] = useState(null);
  
    //Contexto onde ficara salvo as informações dos input
    const [memorias, setMemorias] = useContext(PostsContext);
  
    //Usada para esperar o usuario escolher a foto, por isso Async(dessincronizado)
    const escolherImagem = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true, //Habilitar edicao
        aspect: [4, 3], //Tamanho da foto
        quality: 1, //Qualidade da foto
      });
  
      //condicional caso o usuario desista de escolher a foto
      if (!result.cancelled) {
        setFoto(result.uri);
      }
    };
  
    
    //função para salvar as novas informações com as ja existente
    addMemoriaNova = () => {
      //spread (...) para atualizar e não sobscrever a lista de objetos
      setMemorias([...memorias, { titulo, descricao, localizacao, foto, data }]);
      navigation.navigate('Posts'); //depois ela vai para a tela principal
    };
  
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.label}>Seu nome</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setTitulo}
            maxLength={20}
          />
          <Text  style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setData}
          />
          <Text  style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setLocalizacao}
          />
  
          <Pressable
            style={styles.botaoAddFoto}
            title="Escolher/Tirar foto de perfil"
            onPress={escolherImagem}>
            <View style={styles.conteudoAddFoto}>
              <Text style={styles.textFoto}>Adicionar Foto</Text>
            </View>
  
          {foto && <Image style={styles.imagem} source={{ uri: foto }} />}
  
            <Text  style={styles.pensamento}>O que você está pensando?</Text>
          </Pressable>
          <TextInput
            style={styles.textInputTexto}
            multiline={true}
            maxLength={400}
            onChangeText={setDescricao}
          />
  
        </View>
        <Pressable
          style={styles.botao}
          onPress={() => {
            this.addMemoriaNova();
          }}>
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
      marginTop:14
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
      textAlignVertical:'top',
      
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
      fontWeight:'500',
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
    label:{
      fontWeight:'500',
      fontSize:14,
      color:'#000000',
    },
    pensamento:{
      fontWeight:'500',
      fontSize:14,
      color:'#000000',
      paddingTop:20,
      width:500,
    },
  });
  