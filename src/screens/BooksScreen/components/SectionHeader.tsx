import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {SVGIcon} from '../../../components';
import * as S from '../styles.ts';

interface ISectionHeader {
  title: string;
  id: number;
}

export const SectionHeader = ({title, id}: ISectionHeader) => {
  const isFirstItem = title === 'Special Event';
  const additionalMargin = (id: number) => {
    switch (id) {
      case 1 || 2 || 3:
        return 0;
      case 4:
        return 0;
      default:
        break;
    }
  };
  return (
    <View
      style={[
        S.SECTION_HEADER_CTR(isFirstItem),
        {marginBottom: additionalMargin(id)},
      ]}>
      <TouchableOpacity style={S.SECTION_HEADER_BTN(isFirstItem)}>
        {isFirstItem && <Text style={S.HEADER_TXT_1}>FREE</Text>}
        <Text style={S.HEADER_TXT(isFirstItem)}>{title}</Text>
        {!isFirstItem && (
          <SVGIcon name={'chevronRight'} width={9} height={15} />
        )}
      </TouchableOpacity>
    </View>
  );
};
