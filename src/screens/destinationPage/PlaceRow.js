import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Style from './style/style';
const PlaceRow = ({data}) => {
  console.log(data);
  return (
    <View style={Style.row}>
      <View
        style={{
          ...Style.iconContainer,
          backgroundColor: data.description === 'Home' ? '#42f584' : '#a2a2a2',
        }}>
        {data.description === 'Home' ? (
          <Entypo name="home" size={20} color="#fff" />
        ) : (
          <Entypo name="location-pin" size={20} color="#dedede" />
        )}
      </View>
      <Text style={Style.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;
