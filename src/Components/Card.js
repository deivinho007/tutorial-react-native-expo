import { View, Text, StyleSheet } from 'react-native';

function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.image}></View>
            <View style={styles.textbox}>
                <Text style={styles.titulo}>COMPONENTES</Text>
                <Text style={styles.text}>preojpowrpprewhi0worpjrwjhroihoiwrhorhhroowhoihrwohowhorhowhorhrhwohrwoakjdçlkddddddddjjpojpoeeeeeeeeeeejcophophcpochwpo</Text>
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