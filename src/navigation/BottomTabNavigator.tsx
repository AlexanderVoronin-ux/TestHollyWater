import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';

import {BottomTabParamList, BottomTabStack} from './constants';
import {colors} from '../constants';
import {TabBarLabel} from '../components';
import {DiscoverStackNavigator} from './DiscoverStackNavigator.tsx';
import {HomeScreen, LabelScreen, ProfileScreen} from '../screens';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const handleDisplayTabs = (
    route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
  ) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (routeName === 'ContentScreen') {
      return 'none';
    }
    return 'flex';
  };
  return (
    <Tab.Navigator
      initialRouteName={BottomTabStack.DiscoverStackNavigator}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
          backgroundColor: colors.white,
          borderWidth: 1,
          borderColor: colors.lightGray,
          display: handleDisplayTabs(route),
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.black,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={() => ({
          title: '',
          tabBarIcon: ({focused}) => (
            <TabBarLabel focused={focused} iconName={'home'} />
          ),
        })}
        name={BottomTabStack.HomeScreen}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <TabBarLabel focused={focused} iconName={'discover'} />
          ),
        }}
        name={BottomTabStack.DiscoverStackNavigator}
        component={DiscoverStackNavigator}
      />
      <Tab.Screen
        options={() => ({
          title: '',
          tabBarIcon: ({focused}) => (
            <TabBarLabel focused={focused} iconName={'label'} />
          ),
        })}
        name={BottomTabStack.LabelScreen}
        component={LabelScreen}
      />
      <Tab.Screen
        options={() => ({
          title: '',
          tabBarIcon: ({focused}) => (
            <TabBarLabel focused={focused} iconName={'profile'} />
          ),
        })}
        name={BottomTabStack.ProfileScreen}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
