import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerPokeDex: {
    flex: 1,
    marginTop: 50,
    padding: 24,
  },
  fontTitle: {
    fontSize: 36,
    lineHeight: 50,
    color: 'black',
    fontWeight: '900',
    marginBottom: 16,
  },
  headerSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
  },
  fontDescription: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  cardPoke: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingTop: 25,
    paddingHorizontal: 35,
    marginBottom: 24,
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  pokeItemImages: {
    width: '100%',
    minHeight: 200,
    resizeMode: 'cover',
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
  },
  fontNumber: {
    fontSize: 14,
    lineHeight: 16,
    marginVertical: 10,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  containerNamePokemon: {
    marginVertical: 15,
  },
  fontName: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'capitalize',
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
  },
  badge: {
    borderRadius: 25,
    marginRight: 10,
    textTransform: 'capitalize',
    width: '29.9%',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 5,
  },
});
