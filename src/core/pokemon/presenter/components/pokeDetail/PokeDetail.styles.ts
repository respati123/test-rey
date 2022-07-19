import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pokeItemImages: {
    width: '100%',
    minHeight: 200,
    resizeMode: 'contain',
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
  },
  fontTitle: {
    FontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 46,
    marginVertical: 12,
    textTransform: 'capitalize',
    color: 'black',
  },
  containerDescription: {
    marginVertical: 12,
  },
  containerDescriptionData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  fontLabel: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
    lineHeight: 30,
  },
  fontValue: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    color: 'black',
    marginLeft: 15,
    fontSize: 16,
    lineHeight: 30,
  },
  buttonMoreDetail: {
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 50,
  },
});
