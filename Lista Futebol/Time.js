import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
export function Time({imagem, nomeTime, apelido, campeonatos, trofeu}){

const styles = StyleSheet.create({
  styleImagem: {
    width:50,
    height:40, 
    resizeMode: 'contain',
  },
  trofeuzao: {
    width:33,
    height:23, 
    resizeMode: 'contain',
    position:'absolute',
    marginLeft:325,
    marginTop:9,
  },
  textTime: {
    marginLeft:10,
    marginTop:5,
    // alignItems: 'center',
    flex:1,
  },
  textApelido: {
    marginTop:23,
    flex:1,
    // justifyContent: 'left',
    fontSize:10,
    fontWeight:'bold',
    color:'grey',
    marginLeft:-150,
    
  },
  textTimeCampeonatos: {
    marginTop:10,
    marginLeft:100,
    // alignItems: 'center',
    marginRight:70,
  },
  tudoDaView: {
    marginTop:30,
    paddingBottom:30,
    marginLeft:20,
    flexDirection:'row',
    // flex:1,
    // justifyContent:'left',
        borderBottomWidth:1,
        // borderBottomLeftRadius:10000,
    borderBottomColor:'grey',
  },
  
})

  return(
      <View style={styles.tudoDaView}>
        
        <Image style={styles.styleImagem} source={{uri:imagem}} />
        <Text style={styles.textTime}>{nomeTime}</Text>
        <Text style={styles.textApelido}>{apelido}</Text>
        <Text style={styles.textTimeCampeonatos}>{campeonatos}</Text>
        <Image style={styles.trofeuzao} source={{uri:trofeu}}></Image>
        
      </View>

  )
}