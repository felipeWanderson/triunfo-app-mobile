import React, { useRef, useState  } from 'react';
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

import LogoImg from '../../assets/Logo.png';

import api from '../../services/api';

import styles from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post('/users', {
        name, 
        email, 
        password
      });

      Alert.alert(
        'Cadastro efetuado com sucesso',
        'Você já pode preencher suas fichas'
      );
      setLoading(false);
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert(
        'Falha no cadastro',
        'Verifique seus dados!'
      );
      setLoading(false);
    }
  }

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
          <Icon name="person-outline" size={20} color="#F31616" />
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="rgba(255, 0, 0, 0.8)"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          /> 
        </View>
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
            placeholder="Crie sua senha"
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
            <Text style={styles.buttonText}>Criar conta</Text>
            )
          }
        </RectButton>
      </View>

      <TouchableOpacity 
        style={styles.signLink}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.signLinkText}>Já tenho cadastro</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}