import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ArticlesStackList, DiscoverStack} from '../../navigation/constants.ts';
import {SVGIcon} from '../SVGIcon';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {s_chapterNumber} from '../../store/selectors';
import {useAppDispatch} from '../../store';
import {setChapterNumber} from '../../store/reducers';
import * as S from './styles';

export const CustomHeader = () => {
  const navigation = useNavigation<StackNavigationProp<ArticlesStackList>>();
  const chapterNumber = useSelector(s_chapterNumber);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={S.SAFE_AREA_CTR}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: DiscoverStack.BooksScreen}],
            }),
          );
          dispatch(setChapterNumber(0));
        }}>
        <SVGIcon name={'close'} />
      </TouchableOpacity>
      <View>
        <Text style={S.TITLE_TXT}>{`Chapter ${chapterNumber + 1}`}</Text>
      </View>
      <View style={{width: 24, height: 24}} />
    </SafeAreaView>
  );
};
