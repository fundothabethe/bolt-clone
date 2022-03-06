import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style/style';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const navigate = useNavigation();

  const goToSearch = () => {
    navigate.navigate('Search');
  };
  return (
    <View>
      {/* HomeSearch */}
      <Pressable onPress={goToSearch} style={style.inputBox}>
        <Text style={style.inputText}>Where to </Text>
        <View style={style.timeContainer}>
          <AntDesign name="clockcircle" size={15} color="#000" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={15} color="#000" />
        </View>
      </Pressable>

      {/* current Destination */}

      <View style={style.row}>
        <View style={style.iconContainer}>
          <AntDesign name="clockcircle" size={20} color="#fff" />
        </View>
        <Text style={style.destinationText}>Spin Nightclub</Text>
      </View>

      {/* final Destination */}

      <View style={style.row}>
        <View style={[style.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name="home" size={20} color="#fff" />
        </View>
        <Text style={style.destinationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
