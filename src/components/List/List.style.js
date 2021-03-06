import {StyleSheet, Platform} from 'react-native';
import {width} from '../../utils/common.util';
import {colors, dimensions, fonts} from '../../themes/constants.styles';

export default StyleSheet.create({
  container: {
    width: width - 50,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_BG_TEXT_CONTRAST,
    height: width / 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.SHADOW,
        shadowOpacity: dimensions.SHADOW_OPACITY,
        shadowRadius: dimensions.SHADOW_RADIUS,
        shadowOffset: dimensions.SHADOW_OFFSET,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  container2: {
    width: width - 50,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_BG_TEXT_CONTRAST,
    height: width / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.SHADOW,
        shadowOpacity: dimensions.SHADOW_OPACITY,
        shadowRadius: dimensions.SHADOW_RADIUS,
        shadowOffset: dimensions.SHADOW_OFFSET,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5,
    marginLeft: 4,
  },
  text2: {
    fontFamily: fonts.FONT_FAMILY_BOLD,
    fontSize: fonts.FONT_SIZE_NORMAL,
    marginVertical: 2,
  },
  text: {
    fontFamily: fonts.FONT_FAMILY_BOLD,
    fontSize: fonts.FONT_SIZE_NORMAL,
    marginVertical: 15,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    margin: 10,
  },
  button: {
    marginRight: 10,
  },
});
