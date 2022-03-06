import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './Styles';

const UberTypesRow = props => {
  const {type, onPress, isSelected} = props;
  //

  const getImg = () => {
    //
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }

    if (type.type === 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    }

    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        Style.container,
        {backgroundColor: isSelected ? '#9d9d9d' : 'white'},
      ]}>
      {/* image */}
      <Image style={Style.image} source={getImg()} />
      <View style={Style.middleContainer}>
        <Text style={Style.type}>
          {' '}
          {type.type} <Ionicons name={'person'} size={16} /> 3
        </Text>
        <Text style={Style.time}> {type.duration} drop off</Text>
      </View>

      <View style={Style.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color="#00ff00" />
        <Text style={Style.price}> R{type.price}</Text>
      </View>
    </Pressable>
  );
};

export default UberTypesRow;
