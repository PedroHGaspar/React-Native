import { View, FlatList, Text, StyleSheet} from 'react-native';
import { JogosPreferidos } from './Componentes';
import { LinearGradient } from 'expo-linear-gradient';

export function Jogos() {
  const jogos = [
    {
      nome: 'CS-GO',
      imagemJogo: 'https://cdn.clickwallpapers.net/images/clickwallpapers.net-counter-strike-global-offensive-4k-free-download_img3.jpg',
    },
    {
      nome: 'Project Zomboid',
      imagemJogo: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/01/Project-Zomboid-01.jpg?w=1920&ssl=1',
    },
    {
      nome: 'PayDay 2',
      imagemJogo:
        'https://i.ytimg.com/vi/9VVHR_vNADs/maxresdefault.jpg',
    },
    {
      nome: 'Green Hell',
      imagemJogo:
        'https://www.opiumpulses.com/uploads/articles/418/green-hell.jpg',
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
        data={jogos}
        renderItem={({ item }) => (
          <JogosPreferidos
            nome={item.nome}
            imagemJogo={item.imagemJogo}
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
