import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  Bubble,
  Send,
  SystemMessage,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';

export const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: '#2d3436',
        },
        right: {
          backgroundColor: '#6646ee',
        },
      }}
      textStyle={{
        right: {
          color: '#ffffff',
        },
        left: {
          color: '#ffffff',
        },
      }}
    />
  );
};

export const scrollToBottomComponent = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <IconButton icon='chevron-down' size={34} color='#6646ee' />
    </View>
  );
};

export const renderLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
};

export const renderSystemMessage = (props) => {
  return (
    <SystemMessage
      {...props}
      wrapperStyle={{
        backgroundColor: '#6646ee',
        opacity: 0.8,
        borderRadius: 10,
        padding: 4,
      }}
      textStyle={{ color: '#ffffff', fontSize: 12, fontWeight: '700' }}
    />
  );
};

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#E6E9EF',
      borderTopWidth: 0,
      paddingVertical: 5,
      paddingHorizontal: 2,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      backgroundColor: '#ffffff',
      borderWidth: 0,
      borderRadius: 15,
      paddingTop: 8.5,
      paddingHorizontal: 10,
      marginLeft: 0,
    }}
  />
);

export const renderSend = (props) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
      }}
    >
      <IconButton icon='send-circle' size={32} color='#6646ee' />
    </Send>
  );
};
