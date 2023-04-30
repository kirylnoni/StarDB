import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Record = ({item, field, label}) => {
  return (
    <View>
      <Text style={{marginLeft: 15, paddingTop: 7, paddingBottom: 5}}>{label}</Text>
      <Text style={{marginLeft: 15, marginBottom: 10 }}>{item[field]}</Text>
    </View>
  );
};

export {Record};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const {item, image} = this.state;
    if (!item) {
      return (
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20}}>Select a item from a list</Text>
        </View>
      );
    }

    const {name} = item;

    return (
      <View style={styles.container}>
        <Image source={{uri: image}} style={{width: '40%', height: '100%', borderRadius: 17}} />
        <View style={styles.text}>
        <Text style={styles.txt}>{name}</Text>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {item});
        })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 17,
    
  },
  text: {
    text: {
      marginTop: 20
    }
  },
  txt: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600'
  }
  
});
