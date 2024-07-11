import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import {MainStackScreen} from './constants';
import {BottomTabNavigator} from './BottomTabNavigator';
import {useAppDispatch} from '../store';
import {updateContent} from '../store/reducers';
import {contentMockData} from '../constants/contentMockData.ts';

export type RootParamList = {
  BottomTabNavigator: undefined;
};

const MainStack = createNativeStackNavigator<RootParamList>();

export const MainNavigator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchContent() {
      try {
        for (let i = 0; i < contentMockData.length; i++) {
          const response = await fetch(contentMockData[i].uri);
          const htmlContent = await response.text();

          dispatch(updateContent({id: i, text: htmlContent}));
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }

    fetchContent().then();
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          name={MainStackScreen.BottomTabNavigator}
          component={BottomTabNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
