import {TextStyle, ViewStyle} from 'react-native';

import {fonts, colors} from '../../constants';

export const SAFE_AREA_CTR: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: 20,
  paddingVertical: 14,
  backgroundColor: colors.white,
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomColor: colors.lightGray,
  borderBottomWidth: 1,
};
export const HEADER_CTR: ViewStyle = {
  backgroundColor: colors.white,
  justifyContent: 'center',
  borderBottomColor: colors.lightGray,
  borderBottomWidth: 1,
  paddingHorizontal: 20,
};
export const TITLE_TXT: TextStyle = {
  fontFamily: fonts.albertSansExtraBold,
  fontSize: 22,
  color: colors.black,
  lineHeight: 26,
};
