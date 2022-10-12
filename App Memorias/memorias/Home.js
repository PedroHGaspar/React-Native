import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

export default function Home({ route }) {
  return(
    
  <View style={styles.container}>
    <Text>
    {route.params.paramKey.primeiro}
    </Text>
    <Text>
    {route.params.paramKey.segundo}
    </Text>
    <Text>
    {route.params.paramKey.terceiro}
    </Text>
    <Text>
    {route.params.paramKey.quarto}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
