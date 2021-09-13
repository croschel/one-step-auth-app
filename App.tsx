import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {SignUp} from './src/screens/SignUp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f1f01" />
      <SignUp />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: '#0f1f0f'},
});
