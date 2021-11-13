import React from 'react';
import { ScrollView, Text } from 'react-native-gesture-handler';

const ChairDetails = ({navigation, route}) => {
  const item = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}>

      </ScrollView>
);

};

export default ChairDetails;