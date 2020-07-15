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
import { Title, IconButton, useTheme } from 'react-native-paper';
import { useStatusBar } from '../hooks/useStatusBar';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { register } from '../api/firebaseAuthAPI';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export default function RegisterScreen({ navigation }) {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Title style={styles.titleText}>Register to chat</Title>
            <FormInput
              labelName='Email'
              value={email}
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={(userEmail) => setEmail(userEmail)}
              colors={colors}
            />
            <FormInput
              labelName='Password'
              value={password}
              secureTextEntry
              onChangeText={(userPassword) => setPassword(userPassword)}
              colors={colors}
            />
            <FormButton
              title='Register'
              modeValue='contained'
              labelStyle={styles.registerButtonLabel}
              onPress={() => register(email, password)}
              disabled={email.length === 0}
            />
            <IconButton
              icon='keyboard-backspace'
              size={30}
              color={colors.primary}
              style={styles.navButton}
              onPress={() => navigation.goBack()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  registerButtonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
  navButton: {
    marginTop: 10,
  },
});
