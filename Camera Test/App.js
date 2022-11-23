import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function App() {
  const [foto, setFoto] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
   solicitarPermissao();
  }, []);

  solicitarPermissao = async () => {
      await Camera.requestCameraPermissionsAsync();
  }

  const tirarFoto = async () => {
    const imagem = await camera.takePictureAsync(null);
    setFoto(imagem.uri);
  };

    const limparFoto = async () => {
    setFoto(null);
  };
  return (
    <View style={styles.container}>
      {!foto && (
        <Camera style={styles.foto} ref={(ref) => setCamera(ref)}></Camera>
      )}
      {foto && <Image style={styles.foto} source={{ uri: foto }} />}

      <Pressable onPress={tirarFoto}>
        <Entypo style={styles.botao} name="camera" size={20} color="black" />
      </Pressable>
      <Pressable onPress={limparFoto}>
        <Text style={styles.botao}>Limpar Foto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    height: 400,
    width: 300,
  },
  botao: {
    backgroundColor: 'rgb(115,210,115)',
    borderRadius: 10,
    width: 200,
    height: 40,
    padding: 10,
    textAlign: 'center',
    color: 'yellow',
    fontWeight: 'bold',
    margin: 10
  },
});