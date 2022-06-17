import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#64b5f6',
    flex: 1,
  },
  logo: {
    height: window.height / 3,
    width: window.width,
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
  },
  logo_container: {
    justifyContent: 'center',
    margin: 10,
  },
  body_container: {},
});
