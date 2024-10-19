import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { handleLogin } from '../../../src/backend/auth'; // Importar a função de login

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = async () => {
    const result = await handleLogin(email, password);
    if (result.success) {
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', result.error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logomarca no topo */}
      <Image source={require('../../../src/assets/Logo-02.png')} style={styles.logo} />

      {/* Campos de e-mail e senha */}
      <TextInput
        style={styles.input}
        placeholder="📨 E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="🔑 Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleUserLogin}>
        <Text style={styles.buttonText}>Faça seu Login</Text>
      </TouchableOpacity>

      {/* Link para a tela de cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Ainda não é cadastrado?</Text>
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
    width: 150, // Ajuste o tamanho da logomarca
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25, // Borda arredondada
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
    borderRadius: 25, // Borda arredondada
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#483D8B',
    marginBottom: 40, // Espaço acima do rodapé
  },
  copyright: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
    color: '#aaa',
  },
});
