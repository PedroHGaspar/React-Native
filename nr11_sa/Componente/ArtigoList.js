import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect, useCallback } from 'react';

export function ArtigoList({ mensagem, foto, titulo }) {

//-------------------- To Hide and Show the whole description
const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setShowMoreButton(true);
        setNumLines(1);
      }
    },
    [textShown],
  );
//------------------------------------------------------------

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <Image style={styles.foto} source={{ uri: foto }} />
      <View style={styles.viewTituloMensagem}>
        <Text style={styles.titulo}>{titulo}</Text>
        
        <>
      <Text onTextLayout={onTextLayout} numberOfLines={numLines} style={styles.mensagem} ellipsizeMode="tail">
        {mensagem}
      </Text>

      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={styles.mensagem}>
          {textShown ? 'Read Less' : 'Read More'}
        </Text>
      ) : null}
    </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItem: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  foto: {
    height: 60,
    width: 60,
    margin: 25,
    borderRadius: 2,
  },
  viewTituloMensagem: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    width: '70%',
  },
  titulo: {
    fontWeight: '700',
  //letterSpacing: 1.4,
    fontSize: 20,
    marginBottom: 1,
  },
  mensagem: {
    fontSize: 19,
    color: '#727073',
  },
});
