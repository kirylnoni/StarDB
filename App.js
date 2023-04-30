import React from 'react';
import {View} from 'react-native';
import StackNavigation from './src/components/navigation/stack-navigation';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  )
}

export default App;