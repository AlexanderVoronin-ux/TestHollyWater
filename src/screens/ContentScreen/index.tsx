import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants';
import {useSelector} from 'react-redux';
import RenderHtml from 'react-native-render-html';

import {s_Content} from '../../store/selectors';
import {SCREEN_WIDTH} from '../../constants/screenSizes.ts';
import {BottomTabActions} from './components/BottomTabActions.tsx';
import * as S from './styles';

interface IContent {
  id: number;
  text: string;
}

export const ContentScreen = () => {
  const content = useSelector(s_Content);
  const [index, setIndex] = useState<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const isLastChapterIndex: boolean = index === content.length - 1;

  const listRef = useRef<FlatList>(null);

  const handleBack = () => {
    if (index === 0) {
      return null;
    }
    return setIndex(prev => prev - 1);
  };

  const handleForward = () => {
    if (!isLastChapterIndex) setIndex(prev => prev + 1);
  };

  useEffect(() => {
    listRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);

  const renderItem = useCallback(
    ({item, index}: {item: IContent; index: number}) => {
      const source = {
        html: item.text,
      };
      return (
        <ScrollView style={S.SCROLL_VIEW_CTR}>
          <RenderHtml
            contentWidth={SCREEN_WIDTH}
            source={source}
            tagsStyles={tagsStyles}
          />
          <TouchableOpacity
            disabled={isLastChapterIndex}
            style={S.BTN(isLastChapterIndex)}
            onPress={handleForward}>
            <Text style={S.TITLE_TXT}>Next Chapter</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    },
    [index, content],
  );

  const keyExtractor = useCallback(
    (item: IContent, index: number) => `${item.id}${index}`,
    [],
  );

  const tagsStyles = {
    p: {
      color: colors.black,
      fontSize: 16,
    },
  };

  return (
    <SafeAreaView style={S.SAFE_AREA_CTR}>
      <FlatList
        ref={listRef}
        data={content}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        legacyImplementation={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        snapToInterval={SCREEN_WIDTH}
        onMomentumScrollEnd={event => {
          const {contentOffset} = event.nativeEvent;
          const index = Math.round(contentOffset.x / SCREEN_WIDTH);
          setIndex(index);
        }}
        decelerationRate={'normal'}
        style={{width: SCREEN_WIDTH}}
      />
      <BottomTabActions
        handleBack={handleBack}
        handleForward={handleForward}
        isLastChapterIndex={isLastChapterIndex}
        index={index}
      />
    </SafeAreaView>
  );
};
