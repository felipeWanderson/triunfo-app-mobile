import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const CardLabel = ({ nameLabel, iconName, data, modelo }) => {
  const navigation = useNavigation();

  function navigate() {
    if (data.length > 1){
      navigation.navigate('Fichas', data );
    }else{ 
      navigation.navigate('Formulario', data);
    }
  }
  
  return (
    <View style={styles.cardLabel}>
      <MaterialCommunityIcons
        name={iconName}
        size={32}
        color="#EF2C2C"
      />
      <TouchableOpacity style={styles.textLabelContainer}
        onPress={() => navigate()}
      >
        {
          (modelo === undefined) 
          ? (
            <Text style={styles.textLabel}>{nameLabel}</Text>
          )
          :(
            <Text style={styles.textLabel}>{modelo}</Text>
          )
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate()}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={32}
          color="#EF2C2C"
        />
      </TouchableOpacity>
    </View>
  );
}

export default CardLabel;