import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { usePathname, useRouter } from 'expo-router';

function Card({id, nome, email, avatar, users, setUsers }) {

    const handDelete = async () => {
        const response = await fetch(`http://localhost:3333/profile/${id}`, {
            method: "DELETE"
        })

        if (response.ok) {
            console.log("Deletado com sucesso")
            const updateUsers = users.filter((user) => user.id !== id)// cria um novo arrey sem o id que foi excluido
            setUsers(updateUsers)

        } else {
            console.log("Erro ao deletar")
        }
    }

    const handEdit = () =>{
        console.log("Editar")
        router.push({
            Pathname:'/editUser',
            params:{id,nome,email,avatar}
        })
    }

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={avatar} />
            <View style={styles.textbox}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>

            <View>
                <Pressable onPress={handDelete}>
                    <AntDesign name="edit" size={24} color="black" />  
                </Pressable>

                <Pressable onPress={handDelete}>
                    <FontAwesome name="trash-o" size={24} color="White" />
                </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ff0f0fff',
        width: '90%',
        height: 150,
        marginTop: 20,
        borderRadius: 10,
        padding: 30,
        flexDirection: 'row',
        borderRadius: 10,
        gap: 10
    },
    image: {
        width: 120,
        height: 100,
        backgroundColor: '#000000ff',
        borderRadius: 10,
    },
    textbox: {

    },
    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 31,
        top: 12
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