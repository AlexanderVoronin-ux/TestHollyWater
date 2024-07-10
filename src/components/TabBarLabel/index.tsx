import {View} from 'react-native';
import {SVGIcon} from '../SVGIcon';
import {colors} from '../../constants';
import React from 'react';
import {IconTypes} from '../../assets/svg';

interface ITabBarLabel {
  focused: boolean;
  iconName: IconTypes;
}

export const TabBarLabel = ({focused, iconName}: ITabBarLabel) => {
  return (
    <>
      <View style={{marginBottom: 10}}>
        <SVGIcon
          name={iconName}
          color={focused ? colors.purple : colors.black}
        />
      </View>
      <SVGIcon
        name={'dot'}
        color={focused ? colors.purple : colors.white}
        width={6}
        height={5}
      />
    </>
  );
};
