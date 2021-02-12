import React, { useContext, useState } from "react"
import { View, Text,TextInput, TouchableOpacity, ScrollView, SafeAreaView} from "react-native"
import { AppContext } from "../../context/Context"
import CheckBox from '@react-native-community/checkbox';
import styles from './styles'

const SignUp = (props) => {

    const context = useContext(AppContext)
    const { userLogout } = context
    const [showPassword, setShowPassword] = useState(false)
    const [user,setUser] = useState({lawyer:false, customer:false})
    const logOutUser = () => {
        userLogout()
    }
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#2F2D51', justifyContent: "center", alignItems: "center" }}>
        <View>
            <Text style={{justifyContent:'flex-start', color:'#fff', fontWeight:'bold'}} >Sign up to get your required lawyer</Text>
        </View>
        <View style={{width:'80%', margin:20}} >     
            <Text style={{color:'#fff'}}>Phone number or Email</Text>
            <TextInput
                style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                backgroundColor:"#fff"
                }}
            />
      </View>
      <View style={{flexDirection:'row',width:'80%', justifyContent:'space-between'}}>
      <View style={{width:'40%'}}>
      <Text style={{color:"#fff"}} >First Name</Text>
      <TextInput
                style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                width:'100%',
                backgroundColor:"#fff"
                }}
        />
        </View>
        <View style={{width:"40%"}}>
        <Text style={{color:'#fff'}} >Last Name</Text>        
        <TextInput
                style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                width:'100%',
                backgroundColor:"#fff"
                }}
        />
        </View>
      </View>
      <View style={{width:'80%', margin:20}}>
      <Text style={{color:"#fff"}}>Username</Text>
      <TextInput
                style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                width:'100%',
                backgroundColor:"#fff"
                }}
        />
      </View>
      <View style={{flexDirection:'row',width:'80%', justifyContent:'space-between'}}>
      <View style={{width:'40%'}}>
      <Text style={{color:"#fff"}} >Password</Text>
      <TextInput
            style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                width:'100%',
                backgroundColor:"#fff"
            }}
            secureTextEntry={!showPassword}

        />
        </View>
        <View style={{width:"40%"}}>
        <Text style={{color:'#fff'}} >Confirm Password</Text>        
        <TextInput
            style={{
                height: 40,
                borderColor: '#fff',
                borderWidth: 1,
                width:'100%',
                backgroundColor:"#fff"
            }}
            secureTextEntry={!showPassword}
        />
        </View>
      </View>
      <View style={{flexDirection:'row',margin:20, width:'80%', justifyContent:'space-between'}}>
      <View style={{width:'40%', flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
      <CheckBox tintColors={{color:"#fff"}} value={showPassword} onValueChange={()=>setShowPassword(!showPassword)}/>                
      <Text style={{color:"#fff"}}>Show Password</Text>
      </View>
        <View style={{width:"40%"}}>
        <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-start', alignItems:"center"}}>    
        <CheckBox tintColors={{color:"#fff"}} value={user.lawyer} onValueChange={()=>setUser({lawyer:true, customer:false})}/>
        <Text style={{color:"#fff"}}>Lawyer</Text>
        </View>
        <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-start', alignItems:"center"}}>    
        <CheckBox tintColors={{color:"#fff"}} value={user.customer} onValueChange={()=>setUser({lawyer:false, customer:true})}/>
        <Text style={{color:"#fff"}}>User</Text>
        </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}
        style={styles.signUpButtonContainer}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}
        style={styles.loginButtonContainer}
        onPress={()=>{props.navigation.navigate('SignIn')}}
        >
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
      </SafeAreaView>
    )
}

export default SignUp 
