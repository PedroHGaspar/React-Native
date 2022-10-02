import { View, Text, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import {HomeComida} from '../components/HomeComida';


export function HomeScreen({route}){

const [filmes, setFilmes] = useState([
    {
      nome: 'Lasanha a Bolonhesa',
      apelido:'Lasanha da galera',
      imagemComida:
        'https://anoteareceita.com.br/wp-content/uploads/2019/10/lasanha-a-bolonhesa-com-molho-branco-810x456.jpg',
        valor:'R$ ' + 24.50,
    },
    {
      nome: 'Pizza de Calabresa',
      apelido:'Pizzaria Joks',
      imagemComida:
        'https://s.yimg.com/ny/api/res/1.2/SEMowe8X4DsmdX7uum7gYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4Mw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/c5fd29a0-2b9f-11ec-b3ff-30a01d58d24a',
        valor:'R$ ' + 44.50,
    },
    {
      nome: 'Churrasco',
      apelido:'Churrascaria Betão',
      imagemComida:
        'https://pubimg.band.uol.com.br/files/1307321594d074a21c9f.png',
        valor:'R$ ' + 79.50,
    },
  ]);


useEffect (() => {
  if(route.params){
    const{filme} = route.params;
    setFilmes([filme, ...filmes])
  }
}, [])



  return (
    <View>
        <View style={styles.cabecalho}></View>
        <FlatList
          data={filmes}
          renderItem={({ item }) => (
            <HomeComida nome={item.nome} imagemComida={item.imagemComida} apelido={item.apelido} valor={item.valor} />
          )}
        />
    </View>
  );

}

const styles = StyleSheet.create({
  cabecalho: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    // paddingLeft: 0,
  },
});