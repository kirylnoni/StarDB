import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <View key={id}>
        <TouchableOpacity
        onPress={() => onItemSelected(id)}>
        <Text>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View>
      {items}
    </View>
    
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
