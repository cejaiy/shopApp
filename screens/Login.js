import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, images } from '../constants'
import bgImage from '../assets/images/armchair3.jpg'
import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";


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
        <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>interiorCheck</Text>
       
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
        
        
          <AntDesign name="apple1" size={24} color= {COLORS.primary} />
          <Text style={{ paddingLeft: 10, color: "orange" }}>Login with Apple ID</Text>
        </TouchableOpacity>
        <Text> or </Text>
         <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
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
        
        
          <AntDesign name="google" size={24} color={COLORS.primary} />
          <Text style={{ paddingLeft: 10, color: "black" }}>Login with Google</Text>
        </TouchableOpacity>

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
          <Text style={{ paddingLeft: 10, color: "black" }}>SignUp</Text>
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