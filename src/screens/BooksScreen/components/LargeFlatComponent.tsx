import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {useCallback} from 'react';

import * as S from '../styles.ts';
import {useNavigation} from '@react-navigation/native';
import {
  ArticlesStackList,
  DiscoverStack,
} from '../../../navigation/constants.ts';
import {StackNavigationProp} from '@react-navigation/stack';

type TItems = {
  id: number;
  img: ImageSourcePropType;
};

export interface ISpecialEvent {
  items: TItems[];
}

export const LargeFlatComponent = ({items}: ISpecialEvent) => {
  const navigation = useNavigation<StackNavigationProp<ArticlesStackList>>();

  const lastItemIndex = items.length - 1;

  const renderItem = useCallback(
    ({item, index}: {item: TItems; index: number}) => {
      const {img} = item;
      const isLastItem = lastItemIndex === index;
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(DiscoverStack.ContentScreen)}
          style={S.CARD_CTR(index, isLastItem)}>
          <Image source={img} width={328} height={208} />
        </TouchableOpacity>
      );
    },
    [items],
  );

  const keyExtractor = useCallback((item: TItems) => `${item.id}`, [items]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={items}
      renderItem={renderItem}
      contentContainerStyle={{gap: 16}}
    />
  );
};
