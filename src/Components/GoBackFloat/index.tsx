import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

const GoBackFloat: React.FC = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={() => goBack()} style={styles.container}>
      <Icon name="arrow-back" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default GoBackFloat;
