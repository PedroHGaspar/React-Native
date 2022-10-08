import { View, Button, Text } from 'react-native';
import { CarrinhoContexto } from './contextos/CarrinhoContexto';
import { useContext, useState, useEffect } from 'react';

export function CarrinhoScreen({ navigation }) {
  const [carrinho, setCarrinho] = useContext(CarrinhoContexto);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    let soma = 0;

    carrinho.forEach((produto) => {
      soma += produto.preco;
    });

    setValorTotal(soma);
  }, []);

  finalizarPedido = () => {
    setCarrinho([]);
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Total de produtos: {carrinho.length}</Text>
      <Text>Valor total: R$ {valorTotal}</Text>
      <Button title="Finalizar compra" onPress={finalizarPedido} />
    </View>
  );
}
