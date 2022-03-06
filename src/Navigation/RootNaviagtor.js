import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import {Text, View} from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DummyScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{props.name}</Text>
    </View>
  );
};
const Root = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name="Your trips">
          {() => <DummyScreen name="Your trips" />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name="Help" />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name="Wallet" />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name="Settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Root;
