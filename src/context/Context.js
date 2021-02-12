import React, { createContext, useEffect, useState } from 'react'
import ApiSauce from "../services"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AppContext = createContext()

const AppProvider = (props) => {

    const [user, setUser] = useState(null)
    const [loading, setIsloading] = useState(false)

    const userLogin = async () => {
        setIsloading(true)
        try {
            const res = await ApiSauce.get("https://jsonplaceholder.typicode.com/todos/1", "123")
            setUser(res)
            AsyncStorage.setItem("user", JSON.stringify(res))
            setIsloading(false)
    
        } catch (error) {
            setIsloading(false)
        }
    }
    const userLogout = async () => {
        setIsloading(true)
        try {
            const res = await AsyncStorage.removeItem("user")
            setUser(null)
            // console.warn(res)
            // AsyncStorage.setItem("user", JSON.stringify(res))
            setIsloading(false)
     
        } catch (error) {
  
            setIsloading(false) 
        }
    }
    console.log(user,"USERRR_VAL_IN_CONTEXT");

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            userLogin,
            userLogout,
            loading
        }} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider