import { View, Text, StyleSheet } from 'react-native';
import Header from './src/Components/Header';
import Card from './src/Components/Card';
import Btn from './src/Components/Btn';
import Footer from './src/Components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}></View>
      <Card />
      <Card />
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

















