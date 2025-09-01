import { View, Text, StyleSheet } from 'react-native';
import Header from './src/Components/Header';
import Card from './src/Components/Card';
import Btn from './src/Components/Btn';
import Footer from './src/Components/Footer';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
      img="https://i.ytimg.com/vi/PQhx3tB0_kE/sddefault.jpg" />
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
    backgroundColor: '#6dff68ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#701313ff',
    flex: 7,
    width: '100%',
    padding: 20,
  }
})

















