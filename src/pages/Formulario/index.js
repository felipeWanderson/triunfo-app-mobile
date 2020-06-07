import React, {useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Alert, TouchableOpacity, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

import Header from '../../components/Header';

export default function Formulario() {
  const route = useRoute();
  const data = route.params;
  
  const getForm = () => {
    const form = data.map(d => d.url).join();
    return form;
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Ficha de ${data.map(d => d.nome).join()}`,
        url: getForm(),
      });
    } catch (err) {
      Alert.alert('Error');
    }
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
          <View style={styles.share}>
            <TouchableOpacity 
              onPress={handleShare}>
              <MaterialIcons 
                name="share"
                size={22}
                color= '#FFF'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <WebView source={{ uri: getForm() }} />
    </>
  );
}