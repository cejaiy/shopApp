import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, picker } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { COLORS,FONTS } from "../constants";
import SplashScreen from "./SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SignUp(params) {
    const navigation = params.navigation;

    return (
   <View style = {{flex:1}}>
    <SafeAreaProvider>
      <SplashScreen></SplashScreen>
    </SafeAreaProvider>

    <View>
        <TextInput

          placeholder={'Full name'}
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

          placeholder={'Last name'}
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

          placeholder={'Email address'}
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
            paddingHorizontal: 5,
            paddingVertical: 2,
            marginHorizontal: 150,
            marginTop: 10,
            marginBottom: 20,
            borderColor: COLORS.primary,
            borderWidth:10,
            borderRadius: 20,
            flexDirection: "row",
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ paddingLeft: 110, color: "white", alignSelf: 'center', fontWeight: "bold" }}> SIGN UP</Text>
        </TouchableOpacity>
        </View>
     
    );
    }
  