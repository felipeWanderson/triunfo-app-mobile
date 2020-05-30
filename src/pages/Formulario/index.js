import React, {useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Alert} from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './style';

import Header from '../../components/Header';

export default function Formulario() {
  const route = useRoute();
  const data = route.params;
  
  const getForm = () => {
    const form = data.map(d => d.url).join();
    return form;
  }

  useEffect(() => {
    Alert.alert(
      'Aguarde',
      'Estamos buscando a sua ficha ...'
    )
  });

  return (
    <>
      <View style={styles.container}>
        <Header icon="keyboard-arrow-left" titleHeader='Formulário' />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Último passo: Preencha o Formulário !</Text>
        </View>
      </View>
      <WebView source={{ uri: getForm() }} />
    </>
  );
}