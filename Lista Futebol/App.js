import { View, Text, StyleSheet } from 'react-native';
import {Time} from './Time.js'
export default function App() {

const styles = StyleSheet.create({
  times: {
    marginTop:50,
    paddingTop:40,
    flexDirection:'row',
    marginLeft:25,
    fontWeight:'bold',
  },
  campeonatos: {
    marginTop:-18,
    marginLeft:290,
    color:'lightgrey',
    fontWeight:'bold',
  },
})

  return (
      <View>
        <Text style={styles.times}>Times de futebol</Text>
        <Text style={styles.campeonatos}>Libertadores</Text>
        <Time
        imagem="https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png"
        nomeTime="Palmeiras"
        apelido="Palestra Itália"
        campeonatos="3"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
        <Time
        imagem="https://logodetimes.com/times/avai/logo-avai-256.png"
        nomeTime="Avaí"
        apelido="Leão da Ilha"
        campeonatos="0"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
        <Time
        imagem="https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png"
        nomeTime="Corinthans"
        apelido="Timão"
        campeonatos="2"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
        <Time
        imagem="https://logodetimes.com/times/flamengo/logo-flamengo-256.png"
        nomeTime="Flamengo"
        apelido="Urubu"
        campeonatos="3"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
        <Time
        imagem="https://logodetimes.com/times/internacional/logo-internacional-256.png"
        nomeTime="Internacional"
        apelido="Colorado"
        campeonatos="2"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
        <Time
        imagem="https://logodetimes.com/times/gremio/logo-gremio-256.png"
        nomeTime="Grêmio"
        apelido="Imortal Tricolor"
        campeonatos="3"
        trofeu="https://pixel.cuboup.com/wp-content/uploads/edd/2021/03/Trofeu-dourado-primeiro-lugar.jpg"
        />
      </View>
  );
}

