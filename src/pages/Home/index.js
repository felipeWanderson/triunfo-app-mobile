import React, { useRef, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler'
import { 
  View, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import LogoImg from '../../assets/Logo.png';

import api from '../../services/api';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  
  async function handleSubmit() {
    try {
      setLoading(true);
      const response = await api.post('/sessions', { 
        email, 
        password
      });

      const { user, token } = response.data;

      await AsyncStorage.setItem('@user', JSON.stringify(user));
      await AsyncStorage.setItem('@token', token);
  

      setLoading(false);
      navigation.navigate('Citys');
      setEmail('');
      setPassword('');
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Verifique seus dados!'
      );
      setLoading(false);
    }
  }

  const isAuthenticated = async () => {
    const token = await AsyncStorage.getItem('@token');
    token !== null 
      ? navigation.navigate('Citys') 
      : navigation.navigate('Home') 
  };
  
  useEffect(() => {
    isAuthenticated();
  }, []);
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'} 
      behavior="padding" 
      style={styles.container}
    >
      <View>
        <Image source={LogoImg} style={styles.logo} />
      </View>
      <Text style={styles.title}>Triunfo App.</Text>

      <View style={styles.form}>
       
        <View style={styles.formInput}>
          <Icon name="mail-outline" size={20} color="#F31616" />
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu email"
            placeholderTextColor="rgba(255, 0, 0, 0.8)"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          /> 
        </View>
        <View style={styles.formInput}>
          <Icon name="lock-outline" size={20} color="#F31616" />
          <TextInput
            style={styles.textInput}
            secureTextEntry
            placeholder="Digite sua senha"
            placeholderTextColor="rgba(255, 0, 0, 0.8)"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
            value={password}
            onChangeText={setPassword}
          /> 
        </View>
          
        <RectButton style={styles.button} onPress={handleSubmit}>
          {
            loading ? (
            <ActivityIndicator size="small" color="#fff"/>
            ) : (
            <Text style={styles.buttonText}>Acessar</Text>
            )
          }
        </RectButton>
      </View>

      <TouchableOpacity 
        style={styles.signLink}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signLinkText}>Não tem cadastro ? crie uma conta grátis</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}