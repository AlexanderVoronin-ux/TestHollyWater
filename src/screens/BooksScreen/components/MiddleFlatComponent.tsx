import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React, {useCallback} from 'react';

import * as S from '../styles.ts';

type TItems = {
  id: number;
  img: ImageSourcePropType;
  title?: string;
};

export interface ISpecialEvent {
  items: TItems[];
  additionalMargin?: number;
}

export const MiddleFlatComponent = ({
  items,
  additionalMargin,
}: ISpecialEvent) => {
  const lastItemIndex = items.length - 1;

  const renderItem = useCallback(
    ({item, index}: {item: TItems; index: number}) => {
      const {img, title} = item;
      const isLastItem = lastItemIndex === index;
      return (
        <TouchableOpacity
          onPress={() => {}}
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
