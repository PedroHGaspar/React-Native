import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
    <LinearGradient
          colors={['#000000', '#006478', '#004857' ]}
          style={styles.linearGradient}
        >
      <Image
        style={{
          width: '39%',
          height: '21%',
          borderRadius:200,
          marginBottom:15,
        }}
        source={require('./pedrito.jpg')}
      />
      <Text style={styles.textinho1}>Bem vindo ao meu primeiro App!</Text>
      <Text style={styles.textinho2}>
        Gosto de programar, ouvir músicas enquanto dirijo e sair com os
        amigos sem precisar de motivos!
      </Text>
      <Text
        style={styles.botao1}
        onPress={() => navigation.navigate('Filmes')}>
        Filmes Favoritos
      </Text>
      <Text
        style={styles.botao2}
        onPress={() => navigation.navigate('Jogos')}>
        Jogos Favoritos
      </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor:'',
    flex:1,
    
  },
  botao1: {
    backgroundColor: '#01acad',
     width: '57%',
    padding: 10,
    borderRadius: 15,
    color: '#ffffff',
    textAlign:'center',
    fontWeight:'bold',
        marginBottom:8,
  },
  botao2: {
    backgroundColor: '#01acad',
    width: '57%',
    padding: 10,
    borderRadius: 15,
    color: '#ffffff',
    marginVertical: 10,
    textAlign:'center',
    fontWeight:'bold',
  },
  textinho1: {
    width: '65%',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:30,
        color:'#ffffff',
  },
  textinho2: {
    width: '65%',
    marginTop:'5%',
    marginBottom:'15%',
    textAlign:'center',
    fontSize:15,
        color:'#ffffff',
  },
    linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '102%',
    width: '102%',
    flex:1,
  },
});
