import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {View} from 'react-native';

import {styles} from './styles';
import {firebaseApi} from '../../services/axios';

export const SignUp = () => {
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await firebaseApi.post('createUser', {
        phone,
      });
      setLoading(false);
    } catch (err) {
      console.log({
        error: {title: 'The user could not be created', description: err},
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Enter phone number"
        placeholder="5511988885555"
        leftIcon={{type: 'font-awesome', name: 'phone', color: '#a6a6a6'}}
        inputStyle={styles.inputStyle}
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
      />
      <Button
        title="Submit"
        type="solid"
        containerStyle={styles.buttonStyle}
        onPress={handleSubmit}
        loading={loading}
      />
    </View>
  );
};
