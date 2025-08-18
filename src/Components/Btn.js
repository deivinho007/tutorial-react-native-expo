import { View, Text, StyleSheet } from 'react-native'

function Btn() {
    return (
        <View style={styles.btn}>
            <Text style={styles.titulo}>Ver Mais</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 130,
        height: 50,
        backgroundColor: '#ff0000ff',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Btn