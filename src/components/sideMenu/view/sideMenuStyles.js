import EStyleSheet from 'react-native-extended-stylesheet';
import scalePx from '../../../utils/scalePx';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$primaryBackgroundColor',
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '$primaryBlue',
    justifyContent: 'center',
    height: 128,
    alignItems: 'center',
  },
  headerContentWrapper: {
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contentView: {
    flex: 4,
  },
  userAvatar: {
    marginLeft: 32,
  },
  otherUserAvatar: {
    borderWidth: 0.1,
    borderColor: '$borderColor',
    marginLeft: -7,
    marginRight: 10,
  },
  userInfoWrapper: {
    alignSelf: 'center',
    marginLeft: 15,
    width: 120,
  },
  username: {
    color: '$pureWhite',
    fontWeight: 'bold',
    fontSize: scalePx(16),
    marginBottom: 8,
    maxWidth: '$deviceWidth / 3',
  },
  usernick: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'bold',
    fontSize: scalePx(14),
    marginTop: 2,
  },
  listItem: {
    marginVertical: 15,
  },
  listItemIcon: {
    color: '$iconColor',
    fontSize: 20,
    marginRight: 5,
    width: 20,
  },
  listItemText: {
    color: '$primaryDarkGray',
    marginLeft: 12,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 14,
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: '$primaryFont',
    textAlign: 'center',
    margin: 10,
    color: '$white',
    backgroundColor: 'transparent',
  },
  addAccountWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  itemWrapper: {
    flexDirection: 'row',
    marginLeft: 55,
  },
  versionText: {
    textAlign: 'center',
    color: '$iconColor',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountTile: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: 8,
  },
  displayName: {
    fontWeight: '600',
    fontSize: 16,
    color: '$primaryBlack',
  },
  name: {
    color: '$primaryDarkGray',
  },
  accountModal: {
    backgroundColor: '$primaryBackgroundColor',
  },
  textButton: {
    color: '$primaryBlue',
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  separator: {
    backgroundColor: '$darkIconColor',
    height: 0.5,
  },
});
