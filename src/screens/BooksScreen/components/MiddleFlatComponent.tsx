import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React, {useCallback} from 'react';

import * as S from '../styles.ts';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ArticlesStackList,
  DiscoverStack,
} from '../../../navigation/constants.ts';

type TItems = {
  id: number;
  img: ImageSourcePropType;
  title?: string;
};

export interface IMiddleFlatComponent {
  items: TItems[];
  additionalMargin?: number;
}

export const MiddleFlatComponent = ({
  items,
  additionalMargin,
}: IMiddleFlatComponent) => {
  const navigation = useNavigation<StackNavigationProp<ArticlesStackList>>();

  const lastItemIndex = items.length - 1;

  const renderItem = useCallback(
    ({item, index}: {item: TItems; index: number}) => {
      const {img, title} = item;
      const isLastItem = lastItemIndex === index;
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(DiscoverStack.ContentScreen)}
          style={[
            S.MIDDLE_CARD_CTR(index, isLastItem),
            {marginBottom: additionalMargin},
          ]}>
          <Image
            source={img}
            width={148}
            height={228}
            style={{borderRadius: 8}}
          />
          <Text style={S.TITLE_MIDDLE_TXT}>{title}</Text>
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
