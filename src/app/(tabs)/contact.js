import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import Card from '../../Components/CardUser';
import { useUserStore } from '../../stores/useUserStore'

export default function Contact() {
    
    const router = useRouter();

    const {users, setUsers} = useUserStore()

    useEffect(() => {
        const listUsers = async () => {
            try {
                const response = await fetch('http://localhost:3333/profile'); // substitua pelo IP da sua máquina
                if (response.ok) {
                    console.log('lista carregada com sucesso');
                    const data = await response.json();
                    console.log(data.profiles);
                    setUsers(data.profiles);
                } else {
                    console.log('erro ao carregar lista');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        listUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Página de contato</Text>
            {users.length > 0 ? (
                users.map((user) => (
                    <Card
                        key={user.id}
                        nome={user.name}
                        id={user.id} 
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))
            ) : (
                <Text>Nenhum usuário encontrado.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
