import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { useState } from 'react';

export function ListaPosts({ foto, titulo, descricao, localizacao, data }) {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;

  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.descricaoView}>
        <View style={styles.descricao}>
          <View style={styles.dataFinalPag}>
            <Text style={styles.localizacao}>
              {localizacao} - {date}/{month}
            </Text>
          </View>
          <Text style={styles.descricao}>{descricao}</Text>

          <View style={styles.fotoTitulo}>
            <View style={styles.arrumarRow}>
              <Image style={styles.foto} source={{ uri: foto }} />
              <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <View style={styles.arrumarRow}>
              <Ionicons
                name="heart-sharp"
                size={24}
                color="#C70B04"
                onPress={() => {
                  setLike(like + 1);
                }}
              />
              <Text> {like}</Text>
            </View>
            <View style={styles.arrumarRow}>
              <Fontisto
                name="commenting"
                size={24}
                color="black"
                onPress={() => {
                  setComment(comment + 1);
                }}
              />
              <Text> {comment}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderWidth: 0.2,
    borderColor: '#c0c0c0',
    marginHorizontal: 35,
    height: 'auto',
    width: 352,
    borderRadius: 6,
  },
  foto: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  descricaoView: {
    marginLeft: 10,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
  },
  descricao: {
    fontWeight: '500',
    fontSize: 18,
    padding: 10,
  },
  fotoTitulo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
  },
  localizacao: {
    color: '#454748',
    display: 'flex',
    fontWeight: 'bold',
    marginTop: -10, //ESSA MARGIN É FODA
    //AQUI TEM QUE FAZER COM QUE A LOCALIZACAO E A DATA VA PARA O FINAL DA DIREITA
  },
  dataFinalPag: {
    alignItems: 'flex-end',
  },
  arrumarRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
});
