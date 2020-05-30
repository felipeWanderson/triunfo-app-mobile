import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
  },

  textContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
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

  hr: {
    borderBottomColor: '#F0F0F5',
    borderBottomWidth: 1.5,
    marginBottom: 10,
  },
});