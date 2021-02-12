import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstView: {
        backgroundColor: '#000',
        paddingBottom: 5,
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    secondView: {
        alignItems: 'center', 
        paddingTop: 80,
        flex: 3,
    },
    logoText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    },
    inputContainer: {
        width: '90%',
        paddingHorizontal: 15
    },
    mobileNumberView: {
        flexDirection: 'row', 
        backgroundColor: '#F2E6E7',
        paddingHorizontal: 10, 
        marginTop: 10,
        paddingVertical: 3, 
        width: '100%'
    },
    mobileNumberText: {
        width: '95%',
        fontFamily: "Poppins-Regular", 
        fontSize: 13
    },
    signUpButtonContainer: {
        justifyContent: "center", 
        alignSelf: 'center',
        backgroundColor: "#fff", 
        marginTop: 10, 
        height: 40, 
        width: "50%",
        borderRadius: 20
    },
    signUpButtonText: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 26,
        color: "black",
        fontWeight:'bold'
    },
    loginButtonContainer: {
        justifyContent: "center", 
        alignSelf: 'center',
        backgroundColor: "#fff", 
        marginTop: 20, 
        height: 30, 
        width: "80%",
        borderRadius:2
    },
    loginButtonText: {
        textAlign: "center",
        fontSize: 12,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 26,
        color: "black",
        fontWeight:'bold'
    },
    errorText: {
        color: "#F36533", 
        fontFamily: "Poppins-Regular", 
        fontSize: 9,
        marginBottom: 10
    },
    appVerText: {
        fontFamily: "Poppins-Regular", 
        fontSize: 10, 
        paddingTop: 20,
        color: '#7F7F7F', 
        textAlign: 'center'  
    },
    signUpVerText: {
        fontFamily: "Poppins-Regular", 
        fontSize: 12, 
        paddingTop: 20,
        fontWeight:'bold',
        color: '#FF97B5', 
        textAlign: 'center'  
    },
    updateModalMainView: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    updateModalView: {
        height: 180, 
        width: '90%', 
        borderRadius: 10, 
        backgroundColor: 'white', 
        elevation: 3, 
        paddingHorizontal: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    updateModalText: {
        fontFamily: 'Poppins-Medium', 
        fontSize: 13, 
        textAlign: 'center',
        lineHeight: 17, 
        color: 'rgba(0,0,0,0.8)'
    },
    updateModalBtn: {
        width: "70%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#F36533", 
        marginTop: 25, 
        height: 40, 
        borderRadius: 6,
    },
    updateModalBtnText: {
        fontFamily: "Poppins-SemiBold", 
        fontSize: 16, 
        lineHeight: 26, 
        color: "white", 
        textAlign: "center"
    }
    
})

export default styles 