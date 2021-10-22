import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
    const navigation = params.navigation;
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Power Bike Shop</Text>
       
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "black",
          }}
        >
        
        
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  