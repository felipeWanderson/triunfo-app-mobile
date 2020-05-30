import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StatusBar, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import CardHeader from '../../components/CardHeader';

import styles from './styles';

import citys from '../../services/citys';

const Citys = () => {
  const navigation = useNavigation();
  function navigateToFichas(citys) {
    const city = [];
    city.push(citys)
    navigation.navigate('Types', { city });
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#F31616' />
      <Header titleHeader="Cidades" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>1° passo: Escolha a cidade !</Text>
        </View>
        <ScrollView >
          {
            citys.map(city => (
              <View key={city.id} style={styles.card}>
                <TouchableOpacity onPress={() => navigateToFichas(city)}>
                <CardHeader
                  city={city.name}
                  image={city.icon}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToFichas(city)} >
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color="#EF2C2C"
                  />
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>

      </View>
    </>
  );
}

export default Citys;