import React, { useContext, useState } from "react"
import { View, Text,Alert, TouchableOpacity,TextInput, ImageBackground, Image } from "react-native"
import { AppContext } from "../../context/Context"
import { OverLayLoader } from "../../components"
import styles from './styles'

const SignIn = (props) => {
    const context = useContext(AppContext)
    const [params, setParams] = useState({username:'', password:''});
    const { userLogin, loading } = context
    const SignInUser = () => {
        console.log('credential', params)
        if(params.username && params.password){
            userLogin()
        }
        else{
           Alert.alert('please provide valid username and password!')
        }
  
    }

    console.log(context, "Context_inside_signin");
    return (
            <ImageBackground
              style={{ width:"100%", height:'100%', flex:1, justifyContent:'flex-end', alignContent:'center', alignItems:'center'}}
              resizeMode="cover"  
              source={require('../../assets/background.png')}
            >
            <Text style={{fontSize:30, fontWeight:'bold', marginBottom:20}} >Sign In</Text>   
            <View style={{alignItems:'center',justifyContent:'center', backgroundColor:'#fff', height:'45%', opacity:0.9, borderRadius:40, marginBottom:-40}}>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../assets/emailIcon.png')} />
            <TextInput 
              placeholder="Email or username"
              placeholderTextColor='gray'
              onChangeText={(text)=>{setParams({...params, username:text})}}
              style={{ width:"80%", borderColor: 'black', borderBottomWidth:1 }}
            />
            </View>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
             <Image source={require('../../assets/passwordIcon.png')} />
             <TextInput 
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={(text)=>{setParams({...params,password:text})}}
              style={{ width:"80%", borderColor: 'black', borderBottomWidth:1 }}
            />
            </View>
            <TouchableOpacity activeOpacity='0.8'>
            <Text style={{fontWeight:'bold', marginTop:10}} >Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{width:"100%",marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}}>
              <Text>Dont have an account? signup</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'gray', borderRadius:100, padding:10}} onPress={SignInUser} >
            <Image source={require('../../assets/arrowIcon.png')} />
            </TouchableOpacity>
            </View>    
            </View>
            </ImageBackground>        
    )
}

export default SignIn 
