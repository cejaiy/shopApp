import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, images } from '../constants'
import bgImage from '../assets/images/eggchair7.jpg'
import { StyleSheet } from "react-native";



export default function Login(params) {
    const navigation = params.navigation;
  
    return (
    <ImageBackground source = {bgImage} style = {styles.backgroundContainer}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 100, color: COLORS.secondary }}>Welcome to</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold",paddingRight:110 }}>interior</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold", paddingLeft: 110 }}>Check</Text>
    
         <View>
        <TextInput

          placeholder={'Username'}
          style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:55,
            borderWidth:2,
            marginTop:20,
            paddingHorizontal:40,
            borderColor: COLORS.secondary,
            borderRadius:10,
            paddingVertical:10,
            borderWidth:5
          }}
          
        />

        <TextInput

          placeholder={'Password'}
          secureTextEntry = {true}
          style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:55,
            borderWidth:2,
            marginTop:5,
            paddingHorizontal:40,
            borderColor: COLORS.secondary,
            borderRadius:10,
            paddingVertical:10,
            borderWidth:5
          }}
         />
      </View>

      
      
      <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 45,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "black",
          }}
        >
        <Text style={{ alignSelf:'centre', color: "orange" }}>Login</Text>
        </TouchableOpacity>
        <Text style= {{alignContent:'center', color:COLORS.primary}}> Don't already have an account? </Text>
         <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 50,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "grey",
          }}
        >
          <Text style={{ paddingLeft: 10, color: "black" }}>Register Now</Text>
        </TouchableOpacity>
        </View>
     </ImageBackground> 
  );
}

const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  }
});