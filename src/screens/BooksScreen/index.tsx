import React, {useCallback} from 'react';
import {SectionList, SafeAreaView, ImageSourcePropType} from 'react-native';
import {BOOKS_MOCK_DATA} from '../../constants/booksMockData.ts';
import {HeaderComponent} from './components/HeaderComponent.tsx';
import {SectionHeader} from './components/SectionHeader.tsx';
import {LargeFlatComponent} from './components/LargeFlatComponent.tsx';
import {MiddleFlatComponent} from './components/MiddleFlatComponent.tsx';
import * as S from './styles.ts';

export interface IBooksOption {
  id: number;
  img: ImageSourcePropType;
}

export const BooksScreen = () => {
  const renderItem = useCallback(
    ({item, id}: {item: IBooksOption[]; id: number}) => {
      return (
        <>
          {id === 1 && <LargeFlatComponent items={item} />}
          {id === 2 && <MiddleFlatComponent items={item} />}
          {id === 3 && (
            <MiddleFlatComponent items={item} additionalMargin={116} />
          )}
          {id === 4 && <MiddleFlatComponent items={item} />}
          {id === 6 && <MiddleFlatComponent items={item} />}
          {id === 7 && <MiddleFlatComponent items={item} />}
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
          item: IBooksOption[];
          section: {id: number};
        }) => {
          return renderItem({item, id: section.id});
        }}
        renderSectionHeader={({section: {title, id}}) => (
          <SectionHeader title={title} id={id} />
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 122}}
      />
    </SafeAreaView>
  );
};
