import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  upvoteButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  upvoteIcon: {
    alignSelf: 'flex-start',
    fontSize: 22,
    color: '$primaryBlue',
  },
  popover: {
    flexDirection: 'row',
    width: '$deviceWidth - 20',
    borderRadius: '$deviceWidth - 20 / 2',
    paddingHorizontal: 16,
    backgroundColor: '$white',
    height: 48,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '$white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  amount: {
    fontSize: 10,
    color: '$primaryDarkGray',
    marginLeft: 8,
  },
  percent: {
    width: 40,
    color: '$primaryDarkGray',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  popoverWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    borderTopColor: 'transparent',
  },
  overlay: {
    backgroundColor: '#403c4449',
  },
});
