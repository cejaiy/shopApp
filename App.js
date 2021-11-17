import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import Tabs from './Navigation/tabs';
import ChairDetails from "./screens/ChairDetails";
import SignUp from './screens/SignUp';
import{useFonts} from 'expo-font';

  

   const Stack = createStackNavigator();
   const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })

    
    if(!loaded){
      return null;
    }
    return (
      
      
   
          
         <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false  }}
            initialRouteName = {'login'}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name ="SignUp" component ={SignUp}/>
            <Stack.Screen name="ChairDetails" component={ChairDetails} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer> 
    )
 }
export default App;