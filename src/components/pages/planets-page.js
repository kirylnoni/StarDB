import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';
import { View } from 'react-native';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
      swapiService: new SwapiService()
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
       </View>
       </SwapiServiceProvider>
    );
  }
}
