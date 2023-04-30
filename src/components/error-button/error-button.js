import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
    }
    return (
      <View>
      <Button title='Trow Error'
        onPress={() => this.setState({renderError: true})}/>
      </View>
    );
  }
}
