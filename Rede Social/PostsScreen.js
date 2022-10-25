import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useContext, useState, useEffect } from 'react';
//componentes
import { ListaPosts } from './Componentes/ListaPosts';
//Contexto
import {PostsContext} from './Contexto/PostsContext';


export function Posts({ foto, titulo, descricao, localizacao, data, navigation }) {


  const [memorias, setMemorias] = useContext(PostsContext);


  const teste = [
    {
      foto: 'https://image.api.playstation.com/vulcan/img/rnd/202109/0713/yde6GT9WPbcAUL1QyqjumHs9.png',
      titulo: 'titulo',
      descricao: 'descricao',
      localizacao: 'localizacao',
      data: 'data',
    },
    {
      foto: 'https://image.api.playstation.com/vulcan/img/rnd/202109/0713/yde6GT9WPbcAUL1QyqjumHs9.png',
      titulo: 'titulo',
      descricao: 'descricao',
      localizacao: 'localizacao',
      data: 'data',
    },
  ];

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Adicionar Nova Postagem')}>
        <Text style={styles.textoBotao}>Publicar</Text>
      </Pressable>

      <FlatList
        data={memorias}
        renderItem={({ item }) => (
          <ListaPosts
            foto={item.foto}
            titulo={item.titulo}
            data={item.data}
            descricao={item.descricao}
            localizacao={item.localizacao}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#0DC4AD',
    borderRadius: 6,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
