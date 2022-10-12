import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Text, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Memoria({ navigation }) {
const [titulo, setTitulo] = useState("");
const [quando, setQuando] = useState("");
const [onde, setOnde] = useState("");
const [memoria, setMemoria] = useState("");



  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          onChangeText={(text) => setUserName(username)}
          style={styles.textinput} 
          value={userName.primeiro}
          placeholder="Título"
        />
        <TextInput
          onChangeText={(username) => setUserName(username)}
          style={styles.textinput}
          value={userName.segundo}
          placeholder="Quando aconteceu?"
        />
        <TextInput
          onChangeText={(username) => setUserName(username)}
          style={styles.textinput}
          value={userName.terceiro}
          placeholder="Onde aconteceu?"
        />
        <TextInput
          onChangeText={(username) => setUserName(username)}
          style={styles.textinput}
          value={userName.quarto}
          placeholder="Conte sobre sua memória!"
        />
      </View>
      <Text style={styles.botao1} onPress={pickImage}>
        Escolha uma imagem
      </Text>
      {image && <Image source={{ uri: image }} style={styles.imagem} />}
      <Text
        onPress={() =>
          navigation.navigate('Home', {
            paramKey: userName,
          })
        }
        style={styles.botao2}>
        Salvar Memória
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imagem: {
    width: 340,
    height: 240,
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    margin: 420,
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textinput: {
    textAlign: 'left',
    padding: 8,
    width: 300,
    margin: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
  },
  botao1: {
    textAlign: 'center',
    width: 200,
    padding: 10,
    borderRadius: 7,
    color: '#B71AED',
    marginBottom: 140,
    fontWeight: 'bold',
  },
  botao2: {
    textAlign: 'center',
    backgroundColor: '#B71AED',
    width: 300,
    padding: 15,
    borderRadius: 7,
    color: '#ffffff',
    marginTop: 130,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
