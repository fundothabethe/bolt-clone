import React from 'react';
import HomeScreen from '../screens/Home screens';
import {createStackNavigator} from '@react-navigation/stack';
import DestiantionScreen from '../screens/destinationPage';
import SearchResults from '../screens/SearchResults/Index';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={DestiantionScreen} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};

export default Home;
