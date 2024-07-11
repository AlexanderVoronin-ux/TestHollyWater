import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {SVGIcon} from '../../../components';
import * as S from '../styles.ts';
import {colors} from '../../../constants';

interface IBottomTabActions {
  handleBack: () => void;
  handleForward: () => void;
  isLastChapterIndex: boolean;
  index: number;
}

export const BottomTabActions = ({
  handleBack,
  handleForward,
  isLastChapterIndex,
  index,
}: IBottomTabActions) => {
  return (
    <View style={S.BOTTOM_CTR}>
      <TouchableOpacity style={S.BOTTOM_BTN}>
        <SVGIcon name={'menu'} />
      </TouchableOpacity>
      <TouchableOpacity style={S.BOTTOM_BTN}>
        <SVGIcon name={'settings'} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={index === 0}
        style={S.BOTTOM_BTN}
        onPress={handleBack}>
        <SVGIcon
          name={'chevronLeft'}
          color={index === 0 ? colors.lightGray : colors.black}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLastChapterIndex}
        style={S.BOTTOM_BTN}
        onPress={handleForward}>
        <SVGIcon
          name={'chevronRight'}
          width={10}
          height={24}
          color={!isLastChapterIndex ? undefined : colors.lightGray}
        />
      </TouchableOpacity>
    </View>
  );
};
