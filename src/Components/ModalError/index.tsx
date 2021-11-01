import React from 'react';
import {View} from 'react-native';
import {Button, Overlay, Text} from 'react-native-elements';

import {styles} from './styles';

interface ModalErrorProps {
  title: string;
  description: string;
  buttonText: string;
  onToggleModal: () => void;
  visible: boolean;
}

const ModalError = ({
  title,
  description,
  buttonText,
  onToggleModal,
  visible,
}: ModalErrorProps) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={visible}
      onBackdropPress={onToggleModal}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyles}
          title={buttonText}
          type="solid"
          onPress={onToggleModal}
        />
      </View>
    </Overlay>
  );
};

export default ModalError;
