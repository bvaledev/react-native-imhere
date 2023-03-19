import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flexGrow: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 8,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
    lineHeight: 34
  },
  listEmptyText: {
    color: '#6B6B6B',
    fontSize: 16,
    textAlign: 'center'
  }
});
