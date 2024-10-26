import { createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { ref, get, set, remove } from 'firebase/database';
import { auth, database } from './firebase'; // Certifique-se de que está importando corretamente

// Função de cadastro
export const handleSignup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Adicionar o usuário ao Realtime Database
    await set(ref(database, 'users/' + user.uid), {
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Função de login
export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Função para buscar os dados do usuário
export const getUserData = async () => {
  const userId = auth.currentUser?.uid; // Verifique se o usuário está logado
  if (!userId) {
    throw new Error('Usuário não está logado');
  }

  const userRef = ref(database, 'users/' + userId); // Referência ao usuário no Realtime Database

  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val(); // Retorna os dados do usuário
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null;
  }
};

// Função para atualizar os dados do usuário
export const updateUserData = async (updatedData) => {
  const userId = auth.currentUser?.uid; // Verifique se o usuário está logado
  if (!userId) {
    throw new Error('Usuário não está logado');
  }

  const userRef = ref(database, 'users/' + userId); // Referência ao usuário no Realtime Database

  try {
    const snapshot = await get(userRef); // Busca os dados atuais do usuário
    const currentData = snapshot.val() || {}; // Obtém os dados existentes ou um objeto vazio

    // Mescla os dados existentes com os novos dados
    const newData = { ...currentData, ...updatedData }; 

    await set(userRef, newData); // Atualiza os dados do usuário
    return { success: true };
  } catch (error) {
    console.error("Error updating user data: ", error);
    return { success: false, error: error.message };
  }
};

// Função para deletar dados do usuário
export const deleteUserData = async (field) => {
  const userId = auth.currentUser?.uid; // Verifique se o usuário está logado
  if (!userId) {
    throw new Error('Usuário não está logado');
  }

  const userRef = ref(database, 'users/' + userId); // Referência ao usuário no Realtime Database

  try {
    await remove(ref(database, `users/${userId}/${field}`)); // Remove o campo correspondente
    return { success: true };
  } catch (error) {
    console.error("Error deleting user data: ", error);
    return { success: false, error: error.message };
  }
};

// Função para excluir a conta do usuário
export const deleteAccount = async () => {
  const user = auth.currentUser; // Obtém o usuário logado
  if (!user) {
    throw new Error('Usuário não está logado');
  }

  try {
    await deleteUser(user); // Exclui a conta do usuário
    return { success: true };
  } catch (error) {
    console.error("Error deleting user account: ", error);
    return { success: false, error: error.message };
  }
};
