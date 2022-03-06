import {API, graphqlOperation} from 'aws-amplify';
import React from 'react';
import {useEffect, useState} from 'react';
import {Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {listCars} from '../../graphql/queries';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listCars));
      setCars(response.data.listCars.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const getImg = type => {
    //
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }

    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }

    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
  };

  return (
    <MapView
      showsUserLocation={true}
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(item => (
        <Marker
          key={item.id}
          coordinate={{latitude: item.latitude, longitude: item.longitude}}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              transform: [{rotate: `${item.heading}deg`}],
            }}
            source={getImg(item.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
