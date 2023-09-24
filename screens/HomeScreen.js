import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ImageBackground, Platform, SafeAreaView } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.driodSafeArea}/>
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText} >Iss Tracker App </Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate("IssLocation")
                    }}>
                    <Text style={styles.routeText}>IssLocation</Text>
                    <Text style={styles.knowMore}>{"know More---->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_bg.jpg")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate("Meteors")
                    }}>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"know More---->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_bg.jpg")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    
                </ImageBackground>
            </View>           
        );
    }
   
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    driodSafeArea:{
        marginTop:Platform.OS === "android" ? Statusbar.currentHeight :0 ;
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30,
    },
    knowMore:{
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit:{
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});