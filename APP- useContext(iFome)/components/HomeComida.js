import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function HomeComida({ nome, imagemComida, apelido, valor }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemComida} source={{ uri: imagemComida }} />

      <View style={styles.textos}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.apelido}>{apelido}</Text>
        <Text style={styles.valor}>{valor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagemComida:{
    width:120,
    height:120,
  },
  textos:{
    paddingLeft:10,
  },  
    container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:40,
    marginLeft:20,
  },
  nome:{

  },
});