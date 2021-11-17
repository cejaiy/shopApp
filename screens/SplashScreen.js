import React from 'react';
import {View, Animated, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS} from '../constants';
import Logo from '../assets/icons/bluelogo.png'


export default function SplashScreen(){

    const edges = useSafeAreaInsets();

    return (
        <View style = {{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0, 
            right: 0,
            backgroundColor: COLORS.secondary,
            borderBottomEndRadius: 40,
            borderBottomLeftRadius: 40
        }}
        
        >
            <Animated.View style = {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source= {Logo}
                style = {{
                    width: 100,
                    height: 100,
                    marginBottom: 20
                }}
                ></Image>
                <Text style = {{ fontSize: 70, fontWeight: 100, color: COLORS.white}} >interior</Text>
                <Text style = {{fontSize: 70, fontWeight: 100, color: COLORS.white, paddingLeft:300} }>Check</Text>
            </Animated.View>
        </View>
    );
}
