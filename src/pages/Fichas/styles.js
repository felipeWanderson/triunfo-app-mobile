import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
  },

  textContainer: {
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    color: '#979797',
    fontWeight: 'bold',
  },
  

  card: {
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },
});