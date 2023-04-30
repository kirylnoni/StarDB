import React from 'react';
import {Text} from 'react-native';
import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose } from '../hoc-helpers';

const renderName = ({ name }) => <Text style={{fontSize: 20, paddingTop: 10}}>{name}</Text>;

const renderModelAndName = ({ model, name}) => <Text style={{fontSize: 20, paddingTop: 10}}>{name} ({model})</Text>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
                     withSwapiService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const PlanetList = compose(
                     withSwapiService(mapPlanetMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const StarshipList = compose(
                       withSwapiService(mapStarshipMethodsToProps),
                       withData,
                       withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};
