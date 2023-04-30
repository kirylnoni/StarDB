import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  componentDidMount() {
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <View>
        {errorMessage}
        {spinner}
        {content}
      </View>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        }}
        style={{width: 170, height: '100%', borderRadius: 20}}
      />
      <View style={styles.textcoinainer}>
      <Text style={{marginLeft: 15, fontSize: 20, fontWeight: '600'}}>{name}</Text>
      <Text style={styles.text}>Population:</Text>
      <Text style={styles.text}>{population}</Text>
      <Text style={styles.text}>Rotation Period:</Text>
      <Text style={styles.text}>{rotationPeriod}</Text>
      <Text style={styles.text}>Diameter:</Text>
      <Text style={styles.text}>{diameter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container : {
  flexDirection: 'row',
  margin: 15,
  backgroundColor: 'gray',
  borderRadius: 17,
}, 
text: {
  marginLeft: 20,
  padding: 3,
}
})