
import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from "react-native"
import { Loader } from "./src/components"
import { Login, SignIn } from "./src/containers"
import { AppContext } from "./src/context/Context"
import AppProvider from "./src/context/Context"
import Navigation from "./src/navigation"



const App = () => {
  return (
    <AppProvider>
        <Navigation />
    </AppProvider>
  )
}

export default App

