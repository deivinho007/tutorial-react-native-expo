import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import Btn from '../../Components/Btn';
import Footer from '../../Components/Footer';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.button}>
        <Link href={'contact'}><Text>Contato</Text></Link>
         <Link href={'abolt'}><Text>abolt</Text></Link>
      </View>
      <View style={styles.content}></View>
      <Card title="House oF DRGEONS"
        img="https://m.media-amazon.com/images/S/pv-target-images/dbbd610093f4762e3864f01c7c8dc60fae4e31d95b3b68c66eaa91f3c827ce53.jpg" />

      <Card title="O NOOOO LA POLIZIA"
        desc="noooooooo"
        img="https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      />
      <Btn />
      <Footer />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#701313ff',
    flex: 7,
    width: '100%',
    padding: 20,
  },
  button:{
    backgroundColor: '#ffb703ff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '40%',
  },
  
})

















