import React, {useCallback} from 'react';
import {SectionList, SafeAreaView, ImageSourcePropType} from 'react-native';

import {BOOKS_MOCK_DATA} from '../../constants/booksMockData.ts';
import {HeaderComponent} from './components/HeaderComponent.tsx';
import {SectionHeader} from './components/SectionHeader.tsx';
import {LargeFlatComponent} from './components/LargeFlatComponent.tsx';
import {MiddleFlatComponent} from './components/MiddleFlatComponent.tsx';
import {SmallFlatComponent} from './components/SmallFlatComponent.tsx';
import * as S from './styles.ts';

export interface IBooksOption {
  id: number;
  img: ImageSourcePropType;
  title?: string;
}

export const BooksScreen = () => {
  const renderItem = useCallback(
    ({
      item,
      type,
      additionalMargin,
    }: {
      item: IBooksOption[] | IBooksOption[][];
      type: string;
      additionalMargin: number | undefined;
    }) => {
      return (
        <>
          {type === 'large' && <LargeFlatComponent items={item} />}
          {type === 'middle' && (
            <MiddleFlatComponent
              items={item}
              additionalMargin={additionalMargin}
            />
          )}
          {type === 'small' && (
            <SmallFlatComponent
              items={item}
              additionalMargin={additionalMargin}
            />
          )}
        </>
      );
    },
    [],
  );

  return (
    <SafeAreaView style={S.SAFE_AREA_CTR}>
      <HeaderComponent />
      <SectionList
        sections={BOOKS_MOCK_DATA}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({
          item,
          section,
        }: {
          item: IBooksOption[] | IBooksOption[][];
          section: {type: string; additionalMargin?: number; title: string};
        }) => {
          return renderItem({
            item,
            type: section.type,
            additionalMargin: section.additionalMargin,
          });
        }}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} />
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 122}}
      />
    </SafeAreaView>
  );
};
