import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {SVGIcon} from '../../../components';
import * as S from '../styles.ts';

interface ISectionHeader {
  title: string;
}

export const SectionHeader = ({title}: ISectionHeader) => {
  const isFirstItem = title === 'Special Event';
  return (
    <View style={S.SECTION_HEADER_CTR(isFirstItem)}>
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
