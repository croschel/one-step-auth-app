import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/Routes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: '#0f1f0f'},
});
