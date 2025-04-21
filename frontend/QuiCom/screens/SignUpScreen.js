import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signup } from '../services/auth';

const SignupScreen = ({ navigation }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSignup = async () => {
    const res = await signup(form);
    if (res) {
      alert('Signup successful. Login now.');
      navigation.navigate('Login');
    } else {
      alert('Signup failed!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput value={form.name} onChangeText={(t) => setForm({ ...form, name: t })} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Email</Text>
      <TextInput value={form.email} onChangeText={(t) => setForm({ ...form, email: t })} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Password</Text>
      <TextInput value={form.password} onChangeText={(t) => setForm({ ...form, password: t })} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
