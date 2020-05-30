import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },

  textLabelContainer: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#979797',
    lineHeight: 20,
    textAlign: 'center',
  },
});