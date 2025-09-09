import { View, Text, Button, StyleSheet, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { useState } from "react";


export default function Singup() {
    const router = useRouter();


    const [name, setName] = useState("Deivid")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [avatar, setAvatar] = useState("")


    const handleSingup = async () => {
        const profile = {
            name,
            email,
            pass,
            avatar
        }
        const response = await fetch("http://localhost:3333/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })


        if (response.ok) {
            console.log("Cadastrado com sucesso")
            router.navigate('/profile')
        }else{
            console.log("Erro ao cadastrar")
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro-se</Text>


            <View style={{ width: '80%' }}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    value={pass}
                    onChangeText={setPass}
                />
                <Text style={styles.label}>Avatar:</Text>
                <TextInput
                    style={styles.input}
                    value={avatar}
                    onChangeText={setAvatar}
                />
            </View>




            <View style={styles.button}>
                <Button
                    title="Cadastrar"
                    onPress={handleSingup}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    label: {
        marginTop: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        backgroundColor: '#fff'
    },
    button: {
        marginTop: 20
    }
})



