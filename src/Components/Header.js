import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text>lOGO</Text>
            <View style={styles.menu}></View>
        </View>
    )
}

const styles = StyleSheet.create({
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

})
export default Header

