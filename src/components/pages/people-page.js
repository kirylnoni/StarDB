import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { View } from 'react-native';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {

  state = {
    selectedItem: null,
    swapiService: new SwapiService(),
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    const { selectedItem } = this.state;
  return (
    <SwapiServiceProvider value={this.state.swapiService}>
    <View>
     <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />} />
   </View>
   </SwapiServiceProvider>
  );
}
};


