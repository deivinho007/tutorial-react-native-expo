import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

function Header({ img }) {


    return (
        <View style={styles.header}>
            <Image
                style={styles.img}
                source={img} 
            />
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
    menu: {
        width: 40,
        height: 40,
        backgroundColor: '#7e1010ff',
    },
    img:{
        width: 35,
        height: 35,
        borderRadius: 50,
    }

})
export default Header

