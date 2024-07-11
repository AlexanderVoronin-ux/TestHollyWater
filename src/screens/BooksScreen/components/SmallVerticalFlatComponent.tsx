import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Text,
  View,
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
  number?: number;
};

export interface ISmallVerticalFlatComponent {
  items: TItems[];
  additionalMargin?: number;
}

export const SmallVerticalFlatComponent = ({
  items,
  additionalMargin,
}: ISmallVerticalFlatComponent) => {
  const navigation = useNavigation<StackNavigationProp<ArticlesStackList>>();

  const lastItemIndex = items.length - 1;

  const renderItem = useCallback(
    ({item, index}: {item: TItems; index: number}) => {
      const {img, title, number} = item;
      const isLastItem = lastItemIndex === index;
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(DiscoverStack.ContentScreen)}
          style={[
            S.SMALL_CARD_CTR(index, isLastItem),
            {marginBottom: additionalMargin},
          ]}>
          <Image
            source={img}
            width={80}
            height={120}
            style={{borderRadius: 8}}
          />
          <Text style={S.TITLE_NUMBER_TXT}>{number}</Text>

          <View style={{width: '70%', paddingRight: 5}}>
            <Text style={S.TITLE_SMALL_TXT_1}>
              {'Funfiction'.toUpperCase()}
            </Text>
            <Text style={S.TITLE_SMALL_TXT_2}>{title}</Text>
            <Text style={S.TITLE_SMALL_TXT_3}>476K Reads</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [items],
  );

  const keyExtractor = useCallback((item: TItems) => `${item.id}`, [items]);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={items}
      renderItem={renderItem}
      // contentContainerStyle={{gap: 16}}
    />
  );
};
