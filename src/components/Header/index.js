import React from 'react';
import { View, TouchableOpacity, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Header = ({ icon, titleHeader }) => {
  const navigation = useNavigation();

  async function logoutConfirmad(){
    await AsyncStorage.multiRemove(['@user', '@token'])
    navigation.navigate('Home');
  }

  function logout() {
    Alert.alert(
      "Sair",
      "Tem certeza ?",
      [
        {
          text: 'NÃO',
          style: 'destructive',
        },
        {
          text: 'SIM',
          style: 'cancel',
          onPress: () => logoutConfirmad(),
        },
      ],
      { cancelable: false }
    );
  }

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigateBack()}>
        {icon && <MaterialIcons
          name={icon}
          size={42}
          color='#fff'
        />}
      </TouchableOpacity>
      <Text style={styles.textHeader}>{titleHeader}</Text>
      <TouchableOpacity onPress={() => logout()}>
        <MaterialIcons
          name="exit-to-app"
          size={30}
          color='#fff'
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;