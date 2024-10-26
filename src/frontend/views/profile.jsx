import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { getUserData, updateUserData, deleteUserData } from '../../backend/auth'; // Importar funções necessárias
import { auth } from '../../backend/firebase'; // Importar o auth para acessar o usuário logado
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar o pacote de ícones
import { useNavigation } from '@react-navigation/native'; // Importar o hook de navegação

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [telefone, setTelefone] = useState('');
  const [contatoEmergencia, setContatoEmergencia] = useState('');
  const [endereco, setEndereco] = useState('');
  const navigation = useNavigation(); // Hook de navegação

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uid = auth.currentUser.uid; // Obter o uid do usuário logado
        const data = await getUserData(uid); // Chamar a função com o uid
        setUserData(data);
        setTelefone(data.telefone || '');
        setContatoEmergencia(data.contatoEmergencia || '');
        setEndereco(data.endereco || '');
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    const updatedData = {
      telefone,
      contatoEmergencia,
      endereco,
    };

    try {
      await updateUserData(updatedData); // Atualiza os dados no banco
      setUserData({ ...userData, ...updatedData }); // Atualiza o estado local
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os dados.');
    }
  };

  const handleDelete = async (field) => {
    try {
      await deleteUserData(field); // Chamar a função para deletar o dado correspondente
      setUserData({ ...userData, [field]: null }); // Atualiza o estado local
      Alert.alert('Sucesso', `${field.charAt(0).toUpperCase() + field.slice(1)} apagado com sucesso!`);
    } catch (error) {
      console.error('Erro ao deletar dado:', error);
      Alert.alert('Erro', 'Não foi possível deletar o dado.');
    }
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: async () => {
            try {
              await deleteUserData(auth.currentUser.uid); // Excluir a conta
              Alert.alert('Sucesso', 'Conta excluída com sucesso.');
              navigation.navigate('Home'); // Navegar de volta para a tela Home
            } catch (error) {
              console.error('Erro ao excluir conta:', error);
              Alert.alert('Erro', 'Não foi possível excluir a conta.');
            }
          }
        },
      ],
      { cancelable: false }
    );
  };

  const handleLogout = () => {
    navigation.navigate('Home'); // Navegar de volta para a tela Home
  };

  if (!userData) {
    return <Text>Carregando dados...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Botão "Sair" no canto superior direito */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>

      {/* Campo da foto */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Foto de perfil</Text>
        <Image source={{ uri: userData.foto }} style={styles.profileImage} />
        {/* Ícone redondo abaixo da foto de perfil */}
        <Icon name="account-circle" size={50} color="#483D8B" style={styles.profileIcon} />
      </View>

      {/* Campo do nome */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Nome</Text>
        <View style={styles.rowContainer}>
          <TextInput 
            style={styles.inputField} 
            value={userData.name} 
            editable={false} 
          />
          <TouchableOpacity onPress={() => handleDelete('name')}>
            <Icon name="delete" size={24} color="#483D8B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo do e-mail */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>E-mail</Text>
        <View style={styles.rowContainer}>
          <TextInput 
            style={styles.inputField} 
            value={userData.email} 
            editable={false} 
          />
          <TouchableOpacity onPress={() => handleDelete('email')}>
            <Icon name="delete" size={24} color="#483D8B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo do telefone */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Telefone</Text>
        <View style={styles.rowContainer}>
          <TextInput 
            style={styles.inputField} 
            value={telefone} 
            onChangeText={setTelefone} // Atualiza o estado
            placeholder="Digite seu telefone"
          />
          <TouchableOpacity onPress={() => handleDelete('telefone')}>
            <Icon name="delete" size={24} color="#483D8B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo do contato de emergência */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Contato de Emergência</Text>
        <View style={styles.rowContainer}>
          <TextInput 
            style={styles.inputField} 
            value={contatoEmergencia} 
            onChangeText={setContatoEmergencia} // Atualiza o estado
            placeholder="Digite o contato de emergência"
          />
          <TouchableOpacity onPress={() => handleDelete('contatoEmergencia')}>
            <Icon name="delete" size={24} color="#483D8B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo do endereço */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Endereço</Text>
        <View style={styles.rowContainer}>
          <TextInput 
            style={styles.inputField} 
            value={endereco} 
            onChangeText={setEndereco} // Atualiza o estado
            placeholder="Digite seu endereço"
          />
          <TouchableOpacity onPress={() => handleDelete('endereco')}>
            <Icon name="delete" size={24} color="#483D8B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botões para atualizar ou apagar dados */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Atualizar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Apagar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoutButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#483D8B',
    padding: 8,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputField: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    alignSelf: 'center',
    marginTop: -60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: '#483D8B',
    padding: 15,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#483D8B',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
