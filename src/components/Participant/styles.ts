import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  name: {
    color: '#FDFCFE',
    flex: 1,
    fontSize: 16,
    lineHeight: 26,
    padding: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
    lineHeight: 34
  }
})
