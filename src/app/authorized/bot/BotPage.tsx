/* eslint-disable max-len */
import { ActionIcon, Box, Group, ScrollArea, Stack, Text, TextInput } from '@mantine/core';
import { IconClipboardText, IconCopy, IconDotsVertical, IconStarOff, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import type { FC, PropsWithChildren } from 'react';

interface IBotPageProps {}

const MessageActionButton = ({ children }: PropsWithChildren) => 
  <ActionIcon variant='transparent' color='#787C84'>{children}</ActionIcon>;

const messageMock = (<Stack>
  <Box bg='#F9F5FD'>
    <Text ta='center' px='16px' py='8px' fw='bold'>What are the competitive dynamics between HubSpot and Salesforce</Text>
  </Box>
  <Box>
    <Text fz='16px' ff='Roboto Condensed'>
      The competitive dynamics between HubSpot and Salesforce are largely driven by the differences in their product offerings. Salesforce is an enterprise-level product that is expensive and powerful, but is mainly used by larger companies. HubSpot, on the other hand, is more focused on smaller teams and has grown its functionality to offer robust enterprise-level solutions. Salesforce has an advantage in terms of its integrations, as it is able to integrate with other enterprise-level products, while HubSpot has been working to improve its native integrations and AI capabilities. Salesforce also has a larger customer base, which gives it an advantage in terms of market share. However, HubSpot has been able to differentiate itself by offering a more user-friendly UI, as well as a more cost-effective solution. As one source stated, “I think what HubSpot has really done well is kind of zig really around that. Like all the other competitors even in some of those markets like if you look at what Zendesk is doing or even sort of Adobe, which is much further up-market, right, like so much like here. We're going to acquire a bunch of companies and sort of fill up its table on some sort of investor presentation deck like to be able to check all the boxes” . This shows that HubSpot has been able to differentiate itself from Salesforce by offering a more cost-effective solution that is tailored to smaller teams.
    </Text>
  </Box>
  <Group w='35%' wrap='nowrap'>    
    <MessageActionButton><IconStarOff/></MessageActionButton>
    <Box flex={1}/>
    <MessageActionButton><IconClipboardText/></MessageActionButton>
    <MessageActionButton><IconCopy/></MessageActionButton>
    <Box flex={1}/>
    <MessageActionButton><IconThumbUp/></MessageActionButton>
    <MessageActionButton><IconThumbDown/></MessageActionButton>
    <Box flex={1}/>
    <MessageActionButton><IconDotsVertical/></MessageActionButton>
  </Group>
</Stack>);

export const BotPage: FC<IBotPageProps> = () => {
  return (<Box h='100%' w='100%'>
    <ScrollArea h='95%' mb='20px'>
      <Stack gap='10px'>
        {messageMock}
        {messageMock}
        {messageMock}
        {messageMock}
      </Stack>
    </ScrollArea>
    <Box>
      <TextInput 
        styles={{ input: { height: '51px' } }} 
        placeholder='Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?'
      />
    </Box>
  </Box>);
};
