import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {View} from 'react-native';

import {styles} from './styles';
import {firebaseApi} from '../../services/axios';
import GoBackFloat from '../../Components/GoBackFloat';
import {useNavigation} from '@react-navigation/core';
import ModalError from '../../Components/ModalError';
import {NavigationPropHooks} from '../../Routes';

export const SignUp = () => {
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const {reset} = useNavigation<NavigationPropHooks>();

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await firebaseApi.post('createUser', {
        phone,
      });
      setLoading(false);
      reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    } catch (err) {
      console.log({
        error: {title: 'The user could not be created', description: err},
      });
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      <GoBackFloat />
      <View style={styles.container}>
        <Input
          label="Enter phone number"
          placeholder="5511988885555"
          leftIcon={{type: 'font-awesome', name: 'phone', color: '#a6a6a6'}}
          inputStyle={styles.inputStyle}
          leftIconContainerStyle={{marginRight: 8}}
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
      <ModalError
        title="Error"
        description="Could not be able to subscribe this user"
        visible={showModal}
        onToggleModal={onCloseModal}
        buttonText="OK, I got it!"
      />
    </>
  );
};
