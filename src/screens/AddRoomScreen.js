import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Title, useTheme } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { createRoom } from '../api/firestoreAPI';
import { useStatusBar } from '../hooks/useStatusBar';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export default function AddRoomScreen({ navigation }) {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const { colors } = useTheme();
  const [roomName, setRoomName] = useState('');

  const handlePress = () => {
    if (roomName.length > 0) {
      createRoom(roomName);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.closeButtonContainer}>
              <IconButton
                icon='close-circle'
                size={36}
                color={colors.primary}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.innerContainer}>
              <Title>Create a new chat room</Title>
              <FormInput
                labelName='Room Name'
                value={roomName}
                onChangeText={(text) => setRoomName(text)}
                clearButtonMode='while-editing'
                colors={colors}
              />
              <FormButton
                title='Create'
                modeValue='contained'
                labelStyle={styles.buttonLabel}
                onPress={handlePress}
                disabled={roomName.length === 0}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
});
