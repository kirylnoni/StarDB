import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <View>
        <View>{left}</View>
        <View>{right}</View>
    </View>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
