import { Box } from '@mantine/core';
import { IconClipboardText, IconCopy, IconDotsVertical, IconStarOff, IconThumbDown, IconThumbUp } from '@tabler/icons-react';

import MessageActionButton from './MessageActionButtons';

const MessageButtons = () => {

  return (
    <>
      <MessageActionButton><IconStarOff /></MessageActionButton>
      <Box flex={1} />
      <MessageActionButton><IconClipboardText /></MessageActionButton>
      <MessageActionButton><IconCopy /></MessageActionButton>
      <Box flex={1} />
      <MessageActionButton ><IconThumbUp /></MessageActionButton>
      <MessageActionButton><IconThumbDown /></MessageActionButton>
      <Box flex={1} />
      <MessageActionButton><IconDotsVertical /></MessageActionButton>
    </>);
};

export default MessageButtons;
