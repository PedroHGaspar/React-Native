import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function HomeComida({ nome, imagemComida, apelido, valor, botao }) {
  return (
      <View style={styles.container}>
        <Image style={styles.imagemComida} source={{ uri: imagemComida }} />

        <View style={styles.textos}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.apelido}>{apelido}</Text>
          <Text style={styles.valor}>{valor}</Text>
          <Pressable onPress={() =>
          selecionarPerfil()
        } style={styles.botao}><Text style={styles.josias}>COMPRAR</Text></Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagemComida: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginTop:15,
    marginLeft:15,
  },
  textos: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 40,
    marginLeft: 20,
    borderWidth:0.5,
    borderBottomWidth:2.2,
    marginTop:40,
    borderColor:'#D2D4D6',
    marginRight:20,
  },
  botao:{
    height: 40,
    width: 120,
    marginTop: 92,
    marginLeft:20,
    position:'absolute',
    color: 'red',
    borderColor:'red',
    borderWidth:1,
    letterSpacing:1.5,
    padding:10,
    borderRadius:10,
    textAlign:'center',
    fontWeight:'bold',
  },
  josias:{
    fontWeight:'bold',
    textAlign:'center',
    color:'red',
  },
  nome:{
    fontWeight:'bold',
    fontSize:16,
    alignItems:'center',
    marginBottom:50,
  },
  apelido:{
    fontSize:14,
    color:'#ACAFB0',
    alignItems:'center',
    position:'absolute',
    marginTop:20,
    marginLeft:10,
    width:140,
  },
  valor:{
    fontWeight:'bold',
    fontSize:25,
    position:'absolute',
    width:150,
    marginTop:50,
    marginLeft:10,
  },
});
