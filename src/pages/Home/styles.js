import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 0,
  },

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EF2C2C',
    marginTop: 15,
  },

  subTitile: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },

  form: {
    alignSelf: 'stretch',
    marginTop: 50,
  },

  formInput: {
    marginBottom: 10,
    paddingHorizontal: 15,
    height: 46,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color:'#EF2C2C',
  },

  button: {
    marginTop: 5,
    height: 46,
    backgroundColor: '#F31616',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  signLink: {
    marginTop: 20,
  },

  signLinkText: {
    color: '#F31616',
    fontWeight: 'bold',
    fontSize: 12,
  },

});