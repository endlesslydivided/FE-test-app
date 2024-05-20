import { Image, Stack, Text } from '@mantine/core';

import statsGuy from '../../../assets/images/statsGuy.svg';
import { PageLayout } from '../../../widgets/PageLayout';
import { FinancialSearchInput } from '../../../features';

export const SearchPage = () => {

  const leftSection = (<Stack gap='16px'>
    <Text c='#6869AC' fw='bold' fz='22px'>5,000+ companies with data and insights for you</Text>
    <Text fz='p'>
      <Text>Find the company you are interested in.</Text>
      <Text>This will help us to customize your experience.</Text>
    </Text>
    <FinancialSearchInput />
  </Stack>);

  const rightSection = (<Image src={statsGuy} />);

  return (<PageLayout
    leftSection={leftSection}
    rightSection={rightSection} />);
};
