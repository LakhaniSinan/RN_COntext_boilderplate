import React, {useContext} from "react"
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import { vh, vw } from "../../constants/Dimensions"
import { AppContext } from "../../context/Context"
import { OverLayLoader } from "../../components"

const data = [
    {
        name: "Civil Lawyer",
        backgroundColor: "#FF97B5"
    },
    {
        name: "Estate Property Lawyer",
        backgroundColor: "#F2F7FF"
    },
    {
        name: "Intellectual Property Lawyer",
        backgroundColor: "#F2F7FF"
    },
    {
        name: "Immigration Lawyer",
        backgroundColor: "#FF97B5"
    },

]
const Home = () => {

    const context = useContext(AppContext)
    const { userLogout,loading } = context
    
    const logOutUser = () => {
        userLogout()
    }

    return (
        <ScrollView style={{ backgroundColor: "#2F2D51" }}>
            <View style={styles.topCard}>
                <View style={styles.imageViewStyle}>
                    <Image source={require("../../assests/images/profile.jpg")}
                        style={styles.profileImage}
                    />
                </View>
                <View style={{ marginTop: vh * 0.01 }}>
                    <Text style={styles.nameStyle}>Alexandar Melnychuck</Text>
                </View>
                <View style={styles.userInfoStyle}>
                    <Text style={{ color: "#a9a9a9", fontSize: 12 }} >USER INFO</Text>
                    <View style={{ flexDirection: "row", backgroundColor: "white", paddingVertical: 5, marginTop: 2 }}>
                        <Text style={{ marginRight: vw * 0.04, fontWeight: "400" }}>Username</Text>
                        <Text style={{ color: "#a9a9a9" }}>alex.test@test.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.secondCard}>
                <View style={styles.secondCardImagesTopLevelStyle}>
                    <View>
                        <TouchableOpacity style={styles.secondCardImageOuterStyle}>
                            <Image source={require("../../assests/images/payment.png")}
                                style={{ height: 30, width: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.seconCardTextStyle}>Payment</Text>
                        <Text />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.secondCardImageOuterStyle}>
                            <Image source={require("../../assests/images/calender.png")}
                                style={{ height: 30, width: 30 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.seconCardTextStyle}>Calender</Text>
                        <Text />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.secondCardImageOuterStyle}>
                            <Image source={require("../../assests/images/upload.png")}
                                style={{ height: 35, width: 35 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.seconCardTextStyle}>Upload </Text>
                        <Text style={styles.seconCardTextStyle}>Document </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.secondCardImageOuterStyle}>
                            <Image source={require("../../assests/images/location.png")}
                                style={{ height: 30, width: 30 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.seconCardTextStyle}>Track</Text>
                        <Text style={styles.seconCardTextStyle}>Location </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.secondCardImageOuterStyle} onPress={logOutUser} >
                            <Image source={require("../../assets/logoutIcon.png")}
                                style={{ height: 30, width: 30 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.seconCardTextStyle}>Logout</Text>
                        <Text style={styles.seconCardTextStyle}> </Text>
                    </View>
                </View>
            </View>

            <View style={styles.thirdCard}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.whiteLineStyle} />
                </View>
                <View style={{ marginTop: vh * 0.05, flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={styles.pinkbackground}>
                        <Text style={styles.pinkAndwhiteText}>Civil Lawyer</Text>
                    </View>
                    <View style={styles.whitebackground}>
                        <Text style={styles.pinkAndwhiteText}>Estate Property Lawyer</Text>
                    </View>
                </View>

                <View style={{ marginTop: vh * 0.05, flexDirection: "row", justifyContent: "space-around",marginBottom:vh * 0.01 }}>
                    <View style={styles.whitebackground}>
                        <Text style={styles.pinkAndwhiteText}>Intellectual Property Lawyer</Text>
                    </View>
                    <View style={styles.pinkbackground}>
                        <Text style={styles.pinkAndwhiteText}>Immigration Lawyer</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = {
    pinkAndwhiteText: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    pinkbackground: {
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 500,
        width: vw * 0.35,
        height: 123,
        backgroundColor: "#FF97B5",
        paddingVertical: vh * 0.06,
        paddingHorizontal: 10
    },
    whitebackground: {
        borderRadius: 500,
        width: vw * 0.35,
        height: 123,
        backgroundColor: "#F2F7FF",
        paddingVertical: vh * 0.06,
        paddingHorizontal: 10
    },
    topCard: {
        height: 210,
        borderRadius: 20,
        width: null,
        backgroundColor: "#E5E5E5",
        marginTop: 20,
        marginHorizontal: 30
    },
    profileImage: {
        height: 65,
        width: 65,
        borderRadius: 100
    },
    imageViewStyle: {
        alignItems: "center",
        marginTop: vh * 0.05,
    },
    nameStyle: {
        textAlign: "center",
        fontSize: 18
    },
    userInfoStyle: {
        justifyContent: "flex-end",
        flex: 1,
        marginBottom: vh * 0.02,
        marginLeft: vw * 0.01
    },
    secondCard: {
        opacity: 0.8,
        backgroundColor: "#F2F7FF",
        width: null,
        borderRadius: 20,
        marginTop: vh * 0.07,
        height: 140,
    },
    seconCardTextStyle: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center"
    },
    secondCardImageOuterStyle: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 500,
        justifyContent: "center",
        alignItems: "center",
        marginTop: vh * 0.02
    },
    secondCardImagesTopLevelStyle: {
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
        flexDirection: "row"
    },
    thirdCard: {
        backgroundColor: "#F2F7FF",
        height: vh * 0.5,
        marginTop: vh * 0.04,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        opacity: 0.8,
        justifyContent:"flex-end",
    
    },
    whiteLineStyle: {
        height: 12,
        borderRadius: 15,
        width: 128,
        backgroundColor: "white",
        marginTop: vh * 0.04,
    }

}

export default Home