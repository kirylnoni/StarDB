import React from 'react';
import {View, Image, Text} from 'react-native'
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', }}>
      <Image source={icon} style={{width: 50, height: 50}}/>
        <Text>something has gone terribly wrong</Text>
        <Text>(but we already sent droids to fix it)</Text>
    </View>
  );
};

export default ErrorIndicator;
