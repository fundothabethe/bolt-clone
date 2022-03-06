import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>
        {/* user row */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#cacaca',
              marginRight: 10,
            }}></View>
          <View>
            <Text style={{fontSize: 24, color: 'white'}}>User name</Text>
            <Text style={{color: 'lightgray'}}>5.00'</Text>
          </View>
        </View>

        {/* messages row */}

        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable onPress={() => console.warn('enter to mesage')}>
            <Text style={{color: '#ddd', paddingVertical: 5}}>Messages </Text>
          </Pressable>
        </View>

        {/* Do more */}

        <Pressable onPress={() => console.warn('Dom more')}>
          <Text style={{color: '#ddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>

        {/* make money */}

        <Pressable onPress={() => console.warn('make money')}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />

      {/* make money */}

      <Pressable onPress={() => Auth.signOut()}>
        <Text style={{padding: 5, paddingLeft: 20}}>Log Out</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
