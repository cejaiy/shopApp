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


    <View
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      
       
    <View>

        <View >
        <Text style = {{
            fontSize: 35,
            fontFamily:'SemiBold' ,
            alignSelf: 'center'
        }}>
        Sign Up
        </Text>

        </View>
        <View
        style = {{
            flexDirection: "row",
            alignItems: 'centre',
            borderWidth: 2,
            marginHorizontal: 100,
            paddingHorizontal: 50,
            paddingVertical: 2,
            marginTop: 15,
            borderColor: COLORS.primary,
            borderRadius: 10,


        }}>
            <Ionicons name="md-person-circle-sharp" size={24} color= {COLORS.primary} />
             <TextInput
             style = {{paddingHorizontal: 10}}
             placeholder = "Full name"
             placeholderTextColor = {COLORS.secondary}
              style = {{paddingHorizontal: 10}}>
              </TextInput>
        
        </View>
        <View
        style = {{
            flexDirection: "row",
            alignItems: 'centre',
            borderWidth: 2,
            marginHorizontal: 100,
            paddingHorizontal: 50,
            paddingVertical: 2,
            marginTop: 15,
            borderColor: COLORS.primary,
            borderRadius: 10,


        }}>
            <MaterialCommunityIcons name="email" size={24} color={COLORS.primary} />
             <TextInput 
             style = {{paddingHorizontal: 10}}
             placeholder = "Email"
             placeholderTextColor = {COLORS.secondary}
             style = {{paddingHorizontal: 10}}>
             </TextInput>
        
        </View>
        </View>
        <View
        style = {{
            flexDirection: "row",
            alignItems: 'centre',
            borderWidth: 2,
            marginHorizontal: 100,
            paddingHorizontal: 50,
            paddingVertical: 2,
            marginTop: 15,
            borderColor: COLORS.primary,
            borderRadius: 10,


        }}>
             <FontAwesome name="lock" size={24} color={COLORS.primary} /> 
             <TextInput 
             secureTextEntry
             style = {{paddingHorizontal: 10}}
             placeholder = "Password"
             placeholderTextColor = {COLORS.secondary}
             style = {{paddingHorizontal: 10}}
             >
             </TextInput>
        
        </View>
        <View
        style = {{
            flexDirection: "row",
            alignItems: 'centre',
            borderWidth: 2,
            marginHorizontal: 100,
            paddingHorizontal: 50,
            paddingVertical: 2,
            marginTop: 15,
            borderColor: COLORS.primary,
            borderRadius: 10,


        }}>
            <Ionicons name="md-reload-circle-sharp" size={24} color={COLORS.primary} />
             <TextInput 
             secureTextEntry
             style = {{paddingHorizontal: 10}}
             placeholder = "Re-enter Password"
             placeholderTextColor = {COLORS.secondary}
             >
            </TextInput>
        
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
            borderColor: COLORS.primary,
            borderWidth:10,
            borderRadius: 20,
            flexDirection: "row",
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white", alignSelf: 'center', fontWeight: "bold" }}>             SIGN UP</Text>
        </TouchableOpacity>
    
        </View>
    </View>
    );
    }
  