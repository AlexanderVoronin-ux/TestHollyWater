import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BooksScreen, ContentScreen} from '../screens';
import {ArticlesStackList, DiscoverStack} from './constants.ts';
import {TouchableOpacity} from 'react-native';
import {colors} from '../constants';
import {SVGIcon} from '../components';

const Stack = createStackNavigator<ArticlesStackList>();

export const DiscoverStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={DiscoverStack.BooksScreen} component={BooksScreen} />
      <Stack.Screen
        name={DiscoverStack.ContentScreen}
        component={ContentScreen}
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 16}}
              onPress={() => navigation.goBack()}>
              <SVGIcon
                name={'chevronLeft'}
                width={24}
                height={24}
                color={colors.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
