
import React, { Component, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, ActivityIndicator } from "react-native"
import { Loader } from "../components"
import { Login, SignIn, LogOut, Home, SignUp } from "../containers"
import { AppContext } from "../context/Context"
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createStackNavigator()

function AuthStack() {
    return <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerTitle: 'Sign In',
                headerBackTitleStyle: { color: 'white', fontSize: 50 },
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'black', borderWidth: 1 },
                headerTitleStyle: { color: 'white', fontSize: 25 },
                headerTintColor: 'white',
                headerShown:false
            }} />

             <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerTitle: 'Sign Up',
                headerShown:false,
                headerBackTitleStyle: { color: 'white', fontSize: 50 },
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'black', borderWidth: 1 },
                headerTitleStyle: { color: 'white', fontSize: 25 },
                headerTintColor: 'white'
            }} />

        <Stack.Screen
            name="LogIn"
            component={SignIn}
            options={{
                headerTitle: 'Login',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'black', borderWidth: 1 },
                headerTitleStyle: { color: 'white', fontSize: 25 },
                headerTintColor: 'white',
                headerShown:false
            }} />
    </Stack.Navigator>
}

function AppStack() {
    return <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown:false
            }}
        />

    </Stack.Navigator>
}

const Router = () => {
    const [isUser, setIsUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const context = useContext(AppContext)
    const { user, setUser } = context

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        getUserDetails()

        // const item = AsyncStorage.getItem("user")
        // setIsUser(JSON.parse(item))
    }, [])


    const getUserDetails = async () => {
        let item = await AsyncStorage.getItem("user")
        item = JSON.parse(item)
        setUser(item)
        setIsUser(item)
    }


    console.log(user, isUser, "USERER_CONTEXTTT");
    return (
        <NavigationContainer>
            { loading ? <Loader /> : user ? <AppStack /> : <AuthStack />}
        </NavigationContainer >
    )
}

export default Router