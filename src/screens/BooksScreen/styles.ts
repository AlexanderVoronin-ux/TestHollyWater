import {Platform, TextStyle, ViewStyle} from 'react-native';

import {fonts, colors} from '../../constants';

export const SAFE_AREA_CTR: ViewStyle = {
  flex: 1,
  backgroundColor: colors.white,
};
export const HEADER_CTR: ViewStyle = {
  backgroundColor: colors.white,
  justifyContent: 'center',
  borderBottomColor: colors.lightGray,
  borderBottomWidth: 1,
  paddingHorizontal: 20,
};
export const SEARCH_CTR: ViewStyle = {
  alignItems: 'flex-end',
  paddingVertical: Platform.OS === 'ios' ? 0 : 14,
};
export const SECTION_HEADER_CTR = (isFirstItem: boolean): ViewStyle => ({
  width: '100%',
  backgroundColor: colors.white,
  paddingBottom: isFirstItem ? 15 : 11,
});
export const SECTION_HEADER_BTN = (isFirstItem: boolean): ViewStyle => ({
  flexDirection: isFirstItem ? 'column' : 'row',
  alignItems: isFirstItem ? 'flex-start' : 'center',
  alignSelf: 'flex-start',
  backgroundColor: colors.white,
  paddingTop: isFirstItem ? 11 : 16,
  paddingHorizontal: 20,
});
export const CARD_CTR = (index: number, isLastItem: boolean): ViewStyle => ({
  width: 328,
  backgroundColor: colors.brown,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: colors.black,
  borderRadius: 8,
  overflow: 'hidden',
  marginBottom: 20,
  marginLeft: index === 0 ? 20 : 0,
  marginRight: isLastItem ? 20 : 0,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  elevation: 8,
});
export const MIDDLE_CARD_CTR = (
  index: number,
  isLastItem: boolean,
): ViewStyle => ({
  width: 148,
  backgroundColor: colors.white,
  shadowColor: colors.black,
  marginTop: 12,
  marginBottom: 20,
  marginLeft: index === 0 ? 20 : 0,
  marginRight: isLastItem ? 20 : 0,
});
export const SMALL_CARD_CTR = (
  index: number,
  isLastItem: boolean,
): ViewStyle => ({
  width: 308,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.white,
  shadowColor: colors.black,
  marginTop: 12,
  marginBottom: 20,
});

export const TITLE_TXT: TextStyle = {
  fontFamily: fonts.albertSansExtraBold,
  fontSize: 38,
  color: colors.black,
  lineHeight: 45,
  paddingBottom: 6,
};
export const TITLE_MIDDLE_TXT: TextStyle = {
  fontFamily: fonts.albertSansMedium,
  fontSize: 13,
  color: colors.black,
  lineHeight: 15,
  paddingVertical: 7,
};
export const TITLE_NUMBER_TXT: TextStyle = {
  fontFamily: fonts.albertSansExtraBold,
  fontSize: 38,
  color: colors.lightGray_2,
  lineHeight: 45,
  paddingHorizontal: 24,
};
export const TITLE_SMALL_TXT_1: TextStyle = {
  fontFamily: fonts.albertSansSemiBold,
  fontSize: 12,
  color: colors.purple,
  lineHeight: 14,
};
export const TITLE_SMALL_TXT_2: TextStyle = {
  fontFamily: fonts.albertSansSemiBold,
  fontSize: 15,
  color: colors.black,
  lineHeight: 18,
  paddingVertical: 3,
};
export const TITLE_SMALL_TXT_3: TextStyle = {
  fontFamily: fonts.albertSansRegular,
  fontSize: 13,
  color: colors.lightGray_2,
  lineHeight: 15,
};
export const HEADER_TXT = (isFirstItem: boolean): TextStyle => ({
  fontFamily: isFirstItem
    ? fonts.albertSansSemiBold
    : fonts.albertSansExtraBold,
  fontSize: isFirstItem ? 20 : 24,
  color: colors.black,
  paddingRight: 11,
});
export const HEADER_TXT_1: TextStyle = {
  fontFamily: fonts.albertSansSemiBold,
  fontSize: 12,
  color: colors.purple,
};
