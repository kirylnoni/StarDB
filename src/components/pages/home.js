import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import {SwapiServiceProvider} from '../swapi-service-context';

export default class Home extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

   const {navigate} = this.props.navigation;

    const HeaderApp = () => {
      return (
        <View style={styles.container}>
          <Button title='People'  onPress={() => navigate('People')}/>
          <Button title='Planets' onPress={() => navigate('Planets')}/>
          <Button title='Starships' onPress={() => navigate('Starships')}/>
          <Button title='Change Service' onPress={this.onServiceChange} />
        </View>
      )
    }
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
        <View>
          <HeaderApp />
          <RandomPlanet />
          <Text style={{textAlign: 'center', fontSize: 24, fontStyle: 'italic'}}>Welcome to StarDB App</Text>
        </View>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  }
})