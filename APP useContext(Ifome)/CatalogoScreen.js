import { View, Text, StyleSheet } from 'react-native';
import { PerfilContext } from './contexts/PerfilContext';
import { useContext } from 'react';

export function CatalogoScreen() {
  const [perfil] = useContext(PerfilContext);

  return (
    <View style={styles.container}>
      <Text style={styles.lanche}>LANCHEEEEEEEEEEEEEEEEEE</Text>
      <Text style={styles.lanchinho}>Lanchinho</Text>
      <Text style={styles.total}>TOTAL DO PEDIDO</Text>
      <Text style={styles.preco}>37,90</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40,
    marginLeft: 20,
    borderWidth:0.5,
    borderBottomWidth:2.2,
    marginTop:40,
    borderColor:'#D2D4D6',
    marginRight:20,
  },
  lanche:{
    
  },
});