import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, StatusBar, Text, ScrollView } from 'react-native';

import Header from '../../components/Header';
import CardHeader from '../../components/CardHeader';
import CardLabel from '../../components/CardLabel';


import styles from './styles';

const Types = () => {
  const route = useRoute();
  const citys = route.params.city;
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#F31616' />
      <View style={styles.container}>
        <Header icon="keyboard-arrow-left" titleHeader='Tipo' />
        <View style={styles.textContainer}>
          <Text style={styles.text}>2° passo: Escolha sua ficha !</Text>
        </View>
        <ScrollView >
          {
            citys.map(city => (
              <View key={city.id} style={styles.card}>
                <CardHeader
                  city={city.name}
                  image={city.icon}
                />
                <View style={styles.hr}/>
                {
                  city.types.map(type => (
                    <CardLabel 
                      key={type.id}
                      nameLabel={type.name}
                      iconName="clipboard-text-outline"
                      data={type.fichas} 
                    />
                  ))
                }
              </View>
            ))
          }
        </ScrollView>
      </View>
    </>
  );
}

export default Types;