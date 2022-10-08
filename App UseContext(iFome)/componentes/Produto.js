import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { CarrinhoContexto } from '../contextos/CarrinhoContexto';
import { useContext } from 'react';

export function Produto({ nome, restaurante, preco, foto, navigation }) {
  const [carrinho, setCarrinho] = useContext(CarrinhoContexto);

  adicionarProduto = () => {
    // adicionar o produto ao contexto
    setCarrinho([...carrinho, { nome, restaurante, preco }]);
    navigation.navigate('Carrinho');
  };

  return (
    <View style={styles.produto}>
      <Image style={styles.foto} source={{ uri: foto }} />
      <View style={styles.detalhes}>
        <Text>{nome}</Text>
        <Text>{restaurante}</Text>
        <Text>R$ {preco.toFixed(2)}</Text>
        <Pressable onPress={adicionarProduto} style={styles.botao}>
          <Text style={styles.textoDoBotao}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  produto: {
    padding: 14,
    display: 'flex',
    flexDirection: 'row',
  },
  foto: {
    width: 100,
    height: 90,
    borderRadius: 4,
    marginRight: 10,
  },
  detalhes: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  botao: {
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 6,
    width: '80%',
  },
  textoDoBotao: {
    color: 'red',
    fontWeight: 'bold',
  },
});
