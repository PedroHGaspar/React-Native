import { View, Text } from 'react-native';

export function Perfil({ route }) {
  const { nome } = route.params;
  return (
    <View>
      <Text>Esse é o perfil do {nome}</Text>
    </View>
  );
}
