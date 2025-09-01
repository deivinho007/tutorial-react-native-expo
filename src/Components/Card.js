import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

function Card({ title, desc, img }) {


    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={img} />
            <View style={styles.textbox}>
                <Text style={styles.titulo}>{title}</Text>
                <Text style={styles.text}>{desc}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
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
    textbox: {

    },
    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        width: 200,
        margin: 30,
        lineHeight: 20,

    }
})

export default Card