import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export function MemoriasLista({foto, titulo, descricao, localizacao, data}) {
  return (
    <View style={styles.container}>
      <Image  style={styles.foto} source={{ uri: foto }} />
      <View style={styles.descricaoView}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <View style={styles.localizacaoView}>
      <Entypo name="location-pin" size={24} color="#0DC4AD" />
      <Text style={styles.localizacao}>{localizacao}</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      //alignItems: 'center',
      marginVertical: 20,
      borderBottomWidth: 2,
      borderWidth: 0.2,
      borderRadius: 7,
      borderColor: '#c0c0c0',
      marginHorizontal: 35,
    },
    foto:{
      height: 200,
      width: 320,
      borderRadius: 6
    },
    descricaoView:{
      marginLeft: 10,
      marginVertical: 10
    },
    titulo:{

    },
    descricao:{

    },
    data:{
      fontWeight:'bold',
    },
    localizacaoView:{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      
    },
    localizacao: {
    marginLeft: 2,
    color: '#0DC4AD',
  },
})
