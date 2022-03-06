import React from 'react';
import {StyleSheet} from 'react-native';

const HomeSearch = StyleSheet.create({
  inputBox: {
    backgroundColor: '#b0b0b0',
    margin: 5,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#b3b3b3',
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default HomeSearch;
