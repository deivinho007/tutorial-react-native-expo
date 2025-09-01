import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Contact() {

    const router = useRouter();


    return (
        <View style={styles.container}>
            <Text>Contact Page</Text>
            <Button title='Home' onPress={() => router.replace('/ ')}></Button>
            <Button title='contato' onPress={() => router.replace('/contact ')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})