import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {SVGIcon} from '../../../components';
import * as S from '../styles.ts';

export const HeaderComponent: React.FC = () => {
  return (
    <View style={S.HEADER_CTR}>
      <TouchableOpacity style={S.SEARCH_CTR}>
        <SVGIcon name={'search'} />
      </TouchableOpacity>
      <Text style={S.TITLE_TXT}>Discover</Text>
    </View>
  );
};
