import { View, Text, StyleSheet } from 'react-native';
function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.textfooter}>Santana</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default Footer