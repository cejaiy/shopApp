import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const ChairDetails = ({ navigation, route }) => {

    const scrollX = new Animated.Value(0);
    const [chairbrands, setChairbrands] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;

        setChairbrands(item)
    })

}