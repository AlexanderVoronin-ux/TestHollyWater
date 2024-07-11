import {IBooksOption} from '../screens';

export enum MainStackScreen {
  BottomTabNavigator = 'BottomTabNavigator',
}

export enum BottomTabStack {
  HomeScreen = 'HomeScreen',
  DiscoverStackNavigator = 'DiscoverStackNavigator',
  LabelScreen = 'LabelScreen',
  ProfileScreen = 'ProfileScreen',
}

export enum DiscoverStack {
  BooksScreen = 'BooksScreen',
  ContentScreen = 'ContentScreen',
}

export type BottomTabParamList = {
  HomeScreen: undefined;
  DiscoverStackNavigator: undefined;
  LabelScreen: undefined;
  ProfileScreen: undefined;
};
export type ArticlesStackList = {
  [DiscoverStack.BooksScreen]: undefined;
  [DiscoverStack.ContentScreen]: undefined;
  // [DiscoverStack.ContentScreen]: {content: IBooksOption};
};
