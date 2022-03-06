import {Dimensions, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  textInput: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#eee',
    marginLeft: 20,
  },
  innercontainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },

  //---------row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 6,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},

  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#797979',
    position: 'absolute',
    borderRadius: 50,
    top: 20,
    left: 15,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#797979',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: '#797979',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default Style;
