import React from 'react';
import {Dimensions, View} from 'react-native';
import CovidMessage from '../../componets/covidMessage';
import HomeMap from '../../componets/home map';
import HomeSearch from '../../componets/homeSearch';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 350}}>
        <HomeMap />
      </View>

      {/* covid message */}

      <CovidMessage />

      {/* buttons */}

      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
