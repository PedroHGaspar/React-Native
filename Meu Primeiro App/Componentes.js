import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function FilmesPreferidos({ nome, imagemFilme }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemFilme} source={{ uri: imagemFilme }} />

      <View style={styles.nomeFilmes}>
        <Text style={styles.nomeFilme}>{nome}</Text>
      </View>
    </View>
  );
}

export function JogosPreferidos({ nome, imagemFilme }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemFilme} source={{ uri: imagemFilme }} />

      <View style={styles.nomeFilmes}>
        <Text style={styles.nomeFilme}>{nome}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom:10,
  },
  nomeFilmes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    flex: 1,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#545059',
    marginBottom: 30,
    width: 330,
  },
  imagemFilme: {
    height: 200,
    width: 330,
  },
  nomeFilme: {
    fontSize: 15,
    color: 'white',
    fontWeight:'bold',
  },
});
