import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 48,
    borderRadius: 8,
  },
  container: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    letterSpacing: 0.5,
  },
  buttonStyles: {
    minWidth: 100,
    borderRadius: 24,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
    borderColor: '#0f0f0f',
    borderWidth: 0.8,
    backgroundColor: '#0f0f0f',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 14,
  },
});
