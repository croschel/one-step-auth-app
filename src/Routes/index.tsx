import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from '../screens/SignIn';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {SignUp} from '../screens/SignUp';
import {StatusBar} from 'react-native';

// import { Container } from './styles';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export type NavigationPropHooks = StackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const {Navigator, Screen} = Stack;

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0f1f01" />
      <Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            justifyContent: 'center',
            backgroundColor: '#0f1f0f',
          },
        }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
