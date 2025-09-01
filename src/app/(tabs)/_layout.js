import { Tabs } from "expo-router";
import { Animated } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';




export default function RootLayout() {
    return (
     <Tabs screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { 
            backgroundColor: '#000000ff',
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 90,
            paddingBottom: 10
        },tabBarStyle: { backgroundColor: '#000000ff' }
    }}>   
        <Tabs.Screen
         name="home"
         options={{ title: 'Home', 
         tabBarShowLabel: false,                      
         headerShown: false,
         tabBarIcon: ({ color, size }) => <FontAwesome6 name="house" size={24} color={color} /> 
         }}
        />
        <Tabs.Screen 
        name="contact"
        options={{ title: 'Contact',
            tabBarIcon: ({ color, size }) =><AntDesign name="contacts" size={24} color={color} />  
         }}
        />
        <Tabs.Screen
         name="abolt"
        options={{ title: 'Abolt',
            tabBarIcon: ({ color, size }) =><Feather name="user-plus" size={24} color={color} />
         }}
        />
           <Tabs.Screen 
        name="profile"
        options={{ title: 'profile',
            tabBarIcon: ({ color, size }) =><FontAwesome5 name="user" size={24} color={color} />
         }}
        />

        
    </Tabs>
    )
}