import { View } from 'react-native';
import {Time} from './Time.js'
export default function App() {

  return (
      <View>
        <Time
        imagem="https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png"
        nomeTime="Palmeiras"
        apelido="Palestra Itália"
        campeonatos="3"
        />
        <Time
        imagem="https://logodetimes.com/times/avai/logo-avai-256.png"
        nomeTime="Avaí"
        apelido="Leão da Ilha"
        campeonatos="0"
        />
        <Time
        imagem="https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png"
        nomeTime="Corinthans"
        apelido="Timão"
        campeonatos="2"
        />
        <Time
        imagem="https://logodetimes.com/times/flamengo/logo-flamengo-256.png"
        nomeTime="Flamengo"
        apelido="Urubu"
        campeonatos="3"
        />
        <Time
        imagem="https://logodetimes.com/times/internacional/logo-internacional-256.png"
        nomeTime="Internacional"
        apelido="Colorado"
        campeonatos="2"
        />
        <Time
        imagem="https://logodetimes.com/times/gremio/logo-gremio-256.png"
        nomeTime="Grêmio"
        apelido="Imortal Tricolor"
        campeonatos="3"
        />
      </View>
  );
}

