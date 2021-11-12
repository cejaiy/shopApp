import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import Tabs from './Navigation/tabs';
import ChairDetails from "./screens/ChairDetails";
import SplashScreen from "./screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";


 
function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  
export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      
      require('./assets/images/sofa1.jpg'),
    ]);

    

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

   const Stack = createStackNavigator();
    return (
      
      
      <View style={{ flex: 1 }}>
          
         <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false  }}
            initialRouteName = {{Home}}
          >
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Login" component={Login} />
            
            <Stack.Screen name="Chair Details " component={ChairDetails} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer> 
      </View> 
  

    ); 
  }
 }
  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});