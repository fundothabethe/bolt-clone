import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Root from './src/Navigation/RootNaviagtor';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  //

  const enable = () =>
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        console.log(data);
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      })
      .catch(err => {
        console.warn(err);
      });

  useEffect(() => {
    enable();
  }, []);
  return (
    <>
      <StatusBar style={'auto'} />
      <Root />
    </>
  );
};

export default App;
