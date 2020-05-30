import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const CardHeader = ({city, image}) => {
  return (
    <View style={styles.cardHeader}>
      <Image source={{ uri: image}}
        style={{ width: 32, height: 42}}
      />
      <Text style={styles.cardHeaderText}>{city}</Text>
    </View>
  );
};

export default CardHeader;

