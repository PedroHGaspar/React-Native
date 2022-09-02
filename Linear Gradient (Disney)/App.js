import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#050627', '#1f469a']}
        style={styles.background}
      />
       <Image
        style={{
          width: 241,
          height: 131,
        }}
        source={{
          uri: 'https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 870,
  },
});
