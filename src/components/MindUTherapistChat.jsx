// src/components/MindUTherapistChat.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const responseBank = {
  "Estou me sentindo ansioso": "É normal sentir-se ansioso. Tente praticar a respiração profunda e se concentrar em atividades que você gosta.",
  "Estou me sentindo triste": "Sentir-se triste é algo natural. Você já tentou falar com alguém sobre o que está sentindo?",
  "Não consigo dormir direito": "Tente estabelecer uma rotina de sono, evitar cafeína à noite e fazer atividades relaxantes antes de dormir.",
  "Sinto que não sou bom o suficiente": "Lembre-se de que todos têm seu valor. Tente focar em suas qualidades e conquistas.",
};

const MindUTherapistChat = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([
    { sender: "bot", text: "Olá! Como posso ajudar você hoje?" }
  ]);

  const handleSendMessage = () => {
    const userMessage = input.trim();
    if (userMessage) {
      const botResponse = responseBank[userMessage] || 
        "Desculpe, não tenho uma resposta para isso. Recomendo procurar um profissional para ajudar você.";

      setChat([...chat, { sender: "user", text: userMessage }, { sender: "bot", text: botResponse }]);
      setInput(''); 
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chat.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.sender === "user" ? styles.userMessage : styles.botMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite como você está se sentindo..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Enviar" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D1E7DD',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF3CD',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Espaçamento entre o campo de entrada e o botão
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10, // Espaçamento entre o campo de entrada e o botão
  },
});

export default MindUTherapistChat;
