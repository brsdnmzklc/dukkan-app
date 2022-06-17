import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.container}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'large'} color="white" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
