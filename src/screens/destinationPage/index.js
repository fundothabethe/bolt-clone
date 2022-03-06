import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import Style from './style/style';
import {useNavigation} from '@react-navigation/native';

const DestiantionScreen = () => {
  //

  const navigate = useNavigation();
  //
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  //Check for if both values are selected
  useEffect(() => {
    //

    if (origin && destination) {
      //Redirect here using navigation

      navigate.navigate('SearchResults', {
        origin,
        destination,
      });
    }
  }, [origin, destination]);

  //rere

  return (
    <SafeAreaView style={Style.container}>
      <GooglePlacesAutocomplete
        predefinedPlaces={[homePlace, workPlace]}
        placeholder="From?"
        onPress={(data, details = null) => {
          const value = {data, details};
          setOrigin(value);
          console.log(data, details);
        }}
        suppressDefaultStyles
        styles={{
          textInput: Style.textInput,
          container: Style.innercontainer,
          separator: Style.separator,
          listView: Style.listView,
        }}
        minLength={2}
        enablePoweredByContainer={false}
        currentLocation={true}
        currentLocationLabel="Current Location"
        fetchDetails
        renderDescription={data => data.description || data.vicinity}
        renderRow={data => <PlaceRow data={data} />}
        query={{
          key: 'AIzaSyALKtKgnilyeNL8-K7nr65Fh3ZqjjYBiI8',
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        predefinedPlaces={[homePlace, workPlace]}
        placeholder="Where to?"
        onPress={(data, details = null) => {
          const value = {data, details};
          setDestination(value);
          console.log(data, details);
        }}
        suppressDefaultStyles
        styles={{
          textInput: Style.textInput,
          container: {...Style.innercontainer, top: 55},
        }}
        fetchDetails
        renderRow={data => <PlaceRow data={data} />}
        query={{
          key: 'AIzaSyALKtKgnilyeNL8-K7nr65Fh3ZqjjYBiI8',
          language: 'en',
        }}
      />
      <View style={Style.circle}></View>
      <View style={Style.line}></View>
      <View style={Style.square}></View>
    </SafeAreaView>
  );
};

export default DestiantionScreen;
