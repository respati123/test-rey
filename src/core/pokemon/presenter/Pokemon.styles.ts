import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerHome: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  containerContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
  containerImagesHome: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  imagesLogo: {
    flex: 1,
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
  },
  fontLogoHome: {
    fontSize: 45,
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
    lineHeight: 45,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  containerLogoFont: {
    marginBottom: 12,
    marginTop: 30,
  },
  containerLogoTitle: {
    marginBottom: 1,
  },
  titleLogoHome: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    lineHeight: 30,
    fontWeight: '400',
  },
  containerButton: {
    paddingHorizontal: 24,
    marginTop: 32,
    width: '70%',
  },
});
