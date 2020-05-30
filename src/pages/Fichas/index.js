import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StatusBar, View, FlatList, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import CardLabel from '../../components/CardLabel';

export default function Fichas() {
  const route = useRoute();
  const fichas = route.params;
  

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#F31616' />
      <View style={styles.container}>
        <Header icon="keyboard-arrow-left" titleHeader='Modelo' />
        <View style={styles.textContainer}>
          <Text style={styles.text}>3° passo: Escolha o modelo da ficha !</Text>
        </View>
        <FlatList
          data={fichas}
          keyExtractor={ficha => String(ficha.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: ficha }) => (
            <View style={styles.card}>
              <CardLabel key={ficha.id}
                nameLabel={ficha.nome}
                iconName="clipboard-check-outline"
                data={[ficha]}
                modelo={ficha.modelo}
              />
            </View>
          )}
        />

      </View>
    </>
  );
}