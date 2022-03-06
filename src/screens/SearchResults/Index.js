import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert, Dimensions, ScrollView, View} from 'react-native';
import RouteMap from '../../componets/RouteMap';
import UberTypes from '../../componets/UberTypes/Index';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import awsmobile from '../../aws-exports';
import {useState} from 'react';
import {createOrder} from '../../graphql/mutations';
//
Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const SearchResults = () => {
  //
  const typeState = useState(null);

  const navigation = useNavigation();
  const route = useRoute();
  //

  const {origin, destination} = route.params;

  console.log(route.params);
  //

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    try {
      const userID = await Auth.currentAuthenticatedUser();
      const date = new Date();

      const input = {
        type,
        originLatitude: origin.details.geometry.location.lat,
        originLongitude: origin.details.geometry.location.lng,
        destLatitude: destination.details.geometry.location.lat,
        destLongitude: destination.details.geometry.location.lng,
        createdAt: date.toISOString(),
        userID: userID.attributes.sub,
        carID: '3',
        status: 'NEW',
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input,
        }),
      );
      console.log(response);

      //alert to home screen

      Alert.alert('Order Submitted', 'Your order has been submitted', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home'),
        },
      ]);

      //success
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView>
      {/* // */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View style={{height: 400}}>
        <UberTypes onSubmit={onSubmit} typeState={typeState} />
      </View>
    </ScrollView>
  );
};

export default SearchResults;
