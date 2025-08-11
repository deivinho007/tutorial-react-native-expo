import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>lOGO</Text>
        <View style={styles.menu}></View>
      </View>
      <View style={styles.content}>

        <View style={styles.card}>
          <View style={styles.image}></View>
          <View style={styles.textbox}>
            <Text style={styles.titulo}>COMPONENTES</Text>
            <Text style={styles.text}>preojpowrpprewhi0worpjrwjhroihoiwrhorhhroowhoihrwohowhorhowhorhrhwohrwoakjdçlkddddddddjjpojpoeeeeeeeeeeejcophophcpochwpo</Text>
          </View>                    
        </View>             
         
        <View style={styles.btn}>
          <Text style={styles.titulo}>Ver Mais</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textfooter}>Santana</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6dff68ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#683535ff',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: '#701313ff',
    flex: 7,
    width: '100%',
    padding: 20,
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: '#7e1010ff',
  },
  card: {
    backgroundColor: '#ff0f0fff',
    width: '100%',
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    padding: 30,
    flexDirection: 'row'
  },
  image: {
    width: 180,
    height: 180,
    backgroundColor: '#000000ff',
  },
  textbox:{
    
  },
  titulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
  btn: {
    width: 130,
    height: 50,
    backgroundColor: '#ff0000ff',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footer: {
    backgroundColor: '#ff5656ff',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textfooter: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

















