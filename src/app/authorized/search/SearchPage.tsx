import { Image, Stack, Text } from '@mantine/core';
import type { FC } from 'react';

import statsGuy from '../../../assets/images/statsGuy.svg';
import { PageLayout } from '../../../common/components/PageLayout/PageLayout';
import { FinancialSearchInput } from '../../../widgets/FinancialSearch/FinancialSearchInput';

interface ISearchPageProps {}

export const SearchPage: FC<ISearchPageProps> = () => {

  const leftSection = (<Stack gap='16px'>
    <Text c='#6869AC' fw='bold' fz='22px'>5,000+ companies with data and insight for you</Text>
    <Text fz='p'>
      <Text>Find the company you are interested in.</Text>
      <Text>This will help us customize your experience.</Text>
    </Text>
    <FinancialSearchInput/>
  </Stack>);

  const rightSection = (<Image src={statsGuy}/>);

  return (<PageLayout
    leftSection={leftSection}
    rightSection={rightSection}/>);
};
