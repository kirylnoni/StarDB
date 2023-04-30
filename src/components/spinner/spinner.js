import React from 'react';
import {View, ActivityIndicator} from 'react-native';


const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="yellow" />
    </View>
  );
};

export default Spinner;
