import React from 'react';
import {View, Animated, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS} from '../constants';
import Logo from '../assets/icons/splashimg.png'
import { color } from 'react-native-reanimated';

export default function SplashScreen(){

    const edges = useSafeAreaInsets();

    return (
        <View style = {{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0, 
            right: 0,
            backgroundColor: COLORS.primary
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
                <Text style = {{ fontSize: 50, fontWeight: 100, color: COLORS.white}} >Interior</Text>
                <Text style = {{fontSize: 30, fontWeight: 50, color: COLORS.white} }>                   Decs</Text>
            </Animated.View>
        </View>
    );
}
