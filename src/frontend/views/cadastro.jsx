import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { handleSignup } from '../../../src/backend/auth'; // Importar a função de cadastro

export default function Cadastro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    const result = await handleSignup(name, email, password);
    if (result.success) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login'); // Redireciona para a tela de login
    } else {
      Alert.alert('Erro', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../src/assets/Logo-02.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="🫂 Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="📨 E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="🔑 Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="🔑 Confirme sua Senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      {/* Rodapé com copyright */}
      <Text style={styles.copyright}>© 2024 mindU. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#483D8B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  copyright: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
    color: '#aaa',
  },
});
