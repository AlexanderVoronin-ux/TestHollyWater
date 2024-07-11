import {FlatList, ImageSourcePropType} from 'react-native';
import React, {useCallback} from 'react';

import {SmallVerticalFlatComponent} from './SmallVerticalFlatComponent.tsx';

type TItems = {
  id: number;
  img: ImageSourcePropType;
  title?: string;
  number?: number;
};

export interface ISmallFlatComponent {
  items: TItems[][];
  additionalMargin?: number;
}

export const SmallFlatComponent = ({
  items,
  additionalMargin,
}: ISmallFlatComponent) => {
  const numberElements = (arrayOfArrays: TItems[][]) => {
    let count = 1;

    return arrayOfArrays.map(subArray => {
      return subArray.map(item => {
        item.number = count;
        count++;
        return item;
      });
    });
  };

  const numberedArray = numberElements(items);

  const renderItem = useCallback(
    ({item}: {item: TItems[]}) => {
      return <SmallVerticalFlatComponent items={item} />;
    },
    [items],
  );

  const keyExtractor = useCallback(
    (item: TItems[], index: number) => `${index}`,
    [items],
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={numberedArray}
      renderItem={renderItem}
      contentContainerStyle={{
        gap: 16,
        paddingHorizontal: 20,
        marginBottom: additionalMargin,
      }}
    />
  );
};
