import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BooksScreen, ContentScreen} from '../screens';
import {ArticlesStackList, DiscoverStack} from './constants.ts';
import {CustomHeader} from '../components/CustomHeader';

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
          header: () => <CustomHeader />,
        })}
      />
    </Stack.Navigator>
  );
};
