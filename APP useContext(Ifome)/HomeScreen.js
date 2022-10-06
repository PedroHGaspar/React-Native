import { View, Pressable, Image, Text, StyleSheet, FlatList } from 'react-native';
import { useContext, useState } from 'react';
import { PerfilContext } from './contexts/PerfilContext';
import {HomeComida} from './HomeComida';

export function HomeScreen({ navigation }) {
  const [perfil, setPerfil] = useContext(PerfilContext);

const [comida, setComida] = useState([
    {
      nome: 'Lasanha a Bolonhesa',
      apelido:'Lasanha da galera',
      imagemComida:
        'https://anoteareceita.com.br/wp-content/uploads/2019/10/lasanha-a-bolonhesa-com-molho-branco-810x456.jpg',
        valor:'R$ ' + (24.50).toFixed(2),
        botao:"COMPRAR",
    },
    {
      nome: 'Pizza de Calabresa',
      apelido:'Pizzaria Joks',
      imagemComida:
        'https://s.yimg.com/ny/api/res/1.2/SEMowe8X4DsmdX7uum7gYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4Mw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/c5fd29a0-2b9f-11ec-b3ff-30a01d58d24a',
        valor:'R$ ' + (44.50).toFixed(2),
        botao:"COMPRAR",
    },
    {
      nome: 'Churrasco',
      apelido:'Churrascaria Betão',
      imagemComida:
        'https://pubimg.band.uol.com.br/files/1307321594d074a21c9f.png',
        valor:'R$ ' + (79.50).toFixed(2),
        botao:"COMPRAR",
    },
  ]);

  selecionarPerfil = (perfil) => {
    setPerfil(perfil); //  atualizando o contexto PORRA!!!!!!
    navigation.navigate('Carrinho');
  };

  return (
    <View style={styles.container}>
              <FlatList
          data={comida}
          renderItem={({ item }) => (
            <HomeComida nome={item.nome} imagemComida={item.imagemComida} apelido={item.apelido} valor={item.valor} botao={item.botao}/>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
