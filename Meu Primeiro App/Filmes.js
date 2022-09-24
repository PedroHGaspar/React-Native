import { View, FlatList, Text, StyleSheet} from 'react-native';
import { FilmesPreferidos } from './Componentes';
import { LinearGradient } from 'expo-linear-gradient';

export function Filmes() {
  const filmes = [
    {
      nome: 'Vingadores - Ultimato',
      imagemFilme: 'https://cafecomnerd.com.br/wp-content/uploads/2019/03/vingadores-ultimato-trailer-marvel.jpg',
    },
    {
      nome: 'Senhor dos Anéis - O Retorno do Rei',
      imagemFilme: 'https://i1.wp.com/temalguemassistindo.com.br/wp-content/uploads/2019/02/senhor-dos-aneis-1200x675.jpg',
    },
    {
      nome: 'Hobbit - A Batalha dos Cinco Exércitos',
      imagemFilme:
        'https://observatoriodatv.uol.com.br/wp-content/uploads/2020/02/o-hobbit-a-batalha-dos-cinco-exercitos.jpg',
    },
    {
      nome: 'Em Busca da Liberdade',
      imagemFilme:
        'https://blog.fortestecnologia.com.br/wp-content/uploads/2019/02/fortes-tecnologia-um-sonho-de-liberdade.png',
    },
    {
      nome: 'Velozes e Furiosos - Tokyo Drift',
      imagemFilme:
        'http://images6.fanpop.com/image/photos/43900000/Tokyo-Drift-2006-Wallpaper-fast-and-furious-43983620-1920-1080.jpg',
    },
  ];

  return (
    <View>
        <LinearGradient
          colors={['#000000', '#000000', '#000000','#000000', '#000000', '#616161', '#616161' ]}
          style={styles.linearGradient}
        >
      <View style={styles.cabecalho}>
      </View>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          <FilmesPreferidos
            nome={item.nome}
            imagemFilme={item.imagemFilme}
          />
        )}
      />
      </LinearGradient>
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
