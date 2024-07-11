import React from 'react';
import {Text, View} from 'react-native';
import {colors, fonts} from '../../constants';

export const LabelScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontFamily: fonts.albertSansSemiBold,
          fontSize: 20,
          color: colors.black,
        }}>
        Label Screen
      </Text>
    </View>
  );
};
