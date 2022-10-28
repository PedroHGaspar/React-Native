import { View, Text, StyleSheet } from 'react-native';

export function Publicacao({ texto }) {
  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
