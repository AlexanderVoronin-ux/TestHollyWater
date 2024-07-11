import {TextStyle, ViewStyle} from 'react-native';

import {fonts, colors} from '../../constants';
import {SCREEN_WIDTH} from '../../constants/screenSizes.ts';

export const SAFE_AREA_CTR: ViewStyle = {
  flex: 1,
  backgroundColor: colors.white,
};
export const SCROLL_VIEW_CTR: ViewStyle = {
  flex: 1,
  width: SCREEN_WIDTH,
  backgroundColor: colors.white,
  paddingHorizontal: 20,
};
export const BTN = (isLastChapter: boolean): ViewStyle => ({
  alignSelf: 'center',
  width: '100%',
  backgroundColor: !isLastChapter ? colors.purple : colors.lightGray_2,
  paddingVertical: 18,
  marginVertical: 65,
  borderRadius: SCREEN_WIDTH / 2,
});
export const BOTTOM_CTR: ViewStyle = {
  paddingVertical: 17,
  paddingHorizontal: 35,
  borderTopColor: colors.lightGray,
  borderTopWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const BOTTOM_BTN: ViewStyle = {
  paddingHorizontal: 10,
};

export const TITLE_TXT: TextStyle = {
  fontFamily: fonts.albertSansExtraBold,
  fontSize: 17,
  color: colors.white,
  lineHeight: 20,
  textAlign: 'center',
};
