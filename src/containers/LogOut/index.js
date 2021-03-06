import React, { useContext } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { AppContext } from "../../context/Context"
import { OverLayLoader } from "../../components"

const Login = () => {

    const context = useContext(AppContext)
    const { userLogout,loading } = context

    const logOutUser = () => {
        userLogout()
    }
    return (
        <>
            <OverLayLoader isloading={loading} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={logOutUser}>
                    <Text>Log Out </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Login 
