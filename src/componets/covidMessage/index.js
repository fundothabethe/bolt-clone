import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Be aware of the covid 19</Text>
      <Text style={styles.text}>
        Alternatively you may use the synchronous method Icon.getImageSourceSync
        howe
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
