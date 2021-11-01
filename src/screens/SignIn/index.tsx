import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {View} from 'react-native';

import {styles} from './styles';
import {firebaseApi} from '../../services/axios';
import ModalError from '../../Components/ModalError';
import {NavigationProps} from '../../Routes';

export const SignIn = ({navigation}: NavigationProps) => {
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [waitForCode, setWaitForCode] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  const onAskForCode = async () => {
    setLoading(true);
    try {
      await firebaseApi.post('requestOneTimePass', {
        phone,
      });
      setLoading(false);
      setWaitForCode(true);
      setTimeout(() => {
        setWaitForCode(false);
      }, 120000);
    } catch (err) {
      console.log({
        error: {title: 'The user could not be created', description: err},
      });
      setShowModal(true);
      setLoading(false);
    }
  };

  const onCheckPassCode = async () => {
    try {
      await firebaseApi.post('verifyOneTimePass', {
        phone,
        code,
      });
    } catch (error) {
      console.log({
        error: {title: 'The user could not be created', description: error},
      });
      setLoading(false);
    }
  };

  return (
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
      {waitForCode && (
        <Input
          label="Enter your code"
          placeholder="xxxx"
          maxLength={4}
          leftIcon={{type: 'font-awesome', name: 'hashtag', color: '#a6a6a6'}}
          inputStyle={styles.inputStyle}
          leftIconContainerStyle={{marginRight: 8}}
          keyboardType="number-pad"
          onChangeText={text => setPhone(text)}
        />
      )}
      <View style={styles.buttonContainer}>
        {!waitForCode ? (
          <Button
            title="Ask for code"
            type="solid"
            containerStyle={styles.buttonStyle}
            onPress={onAskForCode}
            loading={loading}
          />
        ) : (
          <Button
            title="Enter on App"
            type="solid"
            containerStyle={styles.buttonStyle}
            onPress={onCheckPassCode}
            loading={loading}
          />
        )}
        <Button
          title="create an account"
          type="clear"
          style={styles.createButton}
          onPress={() => navigation.navigate({key: 'SignUp', name: 'SignUp'})}
        />
      </View>
      <ModalError
        title="Error"
        description="Could not be able to ask your code"
        visible={showModal}
        onToggleModal={onCloseModal}
        buttonText="OK, I got it!"
      />
    </View>
  );
};
