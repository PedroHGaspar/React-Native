import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 141,
          height: 141,
          borderRadius:100,
          marginBottom:10,
        }}
        source={{
          uri: 'https://s2.glbimg.com/6josynSDrf8psyn4_4X14OavmxY=/e.glbimg.com/og/ed/f/original/2022/02/25/border-collie-pexels-alotrobo-3523317.jpg',
        }}
      />
      <Text style={styles.textinho1}>Bem vindo ao meu primeiro App!</Text>
      <Text style={styles.textinho2}>
        Gosto de programar, ouvir músicas altas enquanto dirijo e sair com os
        amigos sem precisar de motivos!
      </Text>
      <Text
        style={styles.botao1}
        onPress={() => navigation.navigate('Perfil', { nome: 'Paulo' })}>
        Filmes Tops
      </Text>
      <Text
        style={styles.botao2}
        onPress={() => navigation.navigate('Perfil', { nome: 'Paulo' })}>
        Minhas Viagens
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop:'20%',
    backgroundColor:'',
    flex:1
    
  },
  botao1: {
    backgroundColor: '#01acad',
     width: '57%',
    padding: 10,
    borderRadius: 15,
    color: '#ffffff',
    textAlign:'center',
    fontWeight:'bold'
  },
  botao2: {
    backgroundColor: '#01acad',
    width: '57%',
    padding: 10,
    borderRadius: 15,
    color: '#ffffff',
    marginVertical: 10,
    textAlign:'center',
    fontWeight:'bold'
  },
  textinho1: {
    width: '65%',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:30,
  },
  textinho2: {
    width: '65%',
    marginTop:'5%',
    marginBottom:'15%',
    textAlign:'center',
    fontSize:15,
  },
});
