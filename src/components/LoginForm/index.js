import React from 'react';
import { Text } from 'react-native';
import userInput from '../../hooks/userInput';
import { Input, InputsWrapper, Button } from './styles';

export default function LoginForm() {
  const email = userInput('');
  const password = userInput('');
  return (
    <InputsWrapper>
      <Text>{email.value}</Text>
      <Input {...email} />
      <Input {...password} />
      <Button title="Registrarse" accessibilityLabel="Learn more about this purple button" />
    </InputsWrapper>
  );
}
