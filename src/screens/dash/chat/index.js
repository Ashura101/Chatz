import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';

export const ChatPage = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://picsum.photos/200/300',
        },
      },
    ]);
  }, []);

  const onSend = messageArray => {
    console.log(messageArray);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messageArray),
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};
