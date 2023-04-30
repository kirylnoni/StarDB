import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import {View} from 'react-native/';
import Row from '../row';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarshipsPage extends Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />} />
        </View>
      </SwapiServiceProvider>
    );
  }
}
