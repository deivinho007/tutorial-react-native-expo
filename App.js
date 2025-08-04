import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
      </View>
      <Text style={styles.TituloPrincipal}>Titulo pricipal :) </Text>
      <Text style={styles.Subtitulo}>Subtitulo :) </Text>
      <Text style={styles.Paragrafo}> Esse é um paragrafo:) </Text>
      <Text style={styles.text}>Saiba mais :) </Text>
      <StatusBar style="auto" />
      <View style={styles.box2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2ebe9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TituloPrincipal: {
    fontFamily: 'poppins', 
    fontSize: "49px",  
    color: 'red',     
    fontWeight: 'bold',
    marginVertical: '10px',  
  },
   Subtitulo: {
    fontFamily: 'poppins', 
    fontSize: "29px",  
    color: 'green',   
    marginVertical: '15px',  
  },
     Paragrafo: {
    fontFamily: 'poppins', 
    fontSize: "19px",  
    color: 'puple',     
  },
     SaibaMais: {
    fontFamily: 'poppins', 
    fontSize: "15px",  
    color: '#636363ff',     
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: '#b60000ff',
  },
   box2: {
    width: 50,
    height: 50,
    backgroundColor: '#5e5e5eff',
     marginVertical: '10px', 
  },
});