import { View, FlatList } from 'react-native';
import { Produto } from './componentes/Produto';

export function HomeScreen({ navigation }) {
  const produtos = [
    {
      nome: 'Coxinha',
      restaurante: 'Marinha Coxinha',
      preco: 8,
      foto: 'https://receitinhas.com.br/wp-content/uploads/2022/08/Coxinha-de-charque.jpg',
    },
    {
      nome: 'Cachorro-Quente',
      restaurante: 'Hot Dog do Piru',
      preco: 20,
      foto: 'https://img.itdg.com.br/tdg/images/recipes/000/119/770/357545/357545_original.jpg?w=1200',
    },
    {
      nome: 'Pizza',
      restaurante: 'PizzaHut',
      preco: 60,
      foto: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/08/pizza-margherita.jpg?x41527',
    },
  ];

  return (
    <View>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Produto
            nome={item.nome}
            restaurante={item.restaurante}
            foto={item.foto}
            preco={item.preco}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}
