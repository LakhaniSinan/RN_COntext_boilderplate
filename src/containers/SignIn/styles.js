import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
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
  });
  