import { ActionIcon, Box, Group, ScrollArea, Stack, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect, useState, type FC } from 'react';

import { useSendMessage } from '../../entities/aibot/api/sendMessage';
import BotMessage from './BotMessage';
import { IconSend } from '@tabler/icons-react';

const BOT_DEFAULT_MODEL = 'claude-3-opus-20240229';
const BOT_MAX_TOKENS = 1024;

interface IChatMessage {
  id?: number,
  question: string,
  answer: string,
}

const BotChat: FC = () => {

  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  const { data: result, isFetching, refetch: send } = useSendMessage({
    max_tokens: BOT_MAX_TOKENS,
    messages: [
      { role: 'user', content: userMessage },
    ],
    model: BOT_DEFAULT_MODEL,
  });

  useEffect(() => {
    if (!isFetching) {
      if (result?.data && messages[messages.length - 1]) {
        const botAnswer = result.data;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          console.log(prev);
          lastMessage.answer = botAnswer.content[0]?.text;
          prev[prev.length - 1] = lastMessage;
          return [...prev];
        });
      } else if (result && result?.status !== 200) {
        notifications.show({ color: 'red', message: 'Some error occured', title: 'Error' });
      }
    }
  }, [isFetching]);

  const handleSend = () => {
    const newMessage = {
      id: messages.length,
      question: userMessage,
      answer: '',
    };
    setMessages(prev => [...prev, newMessage]);
    send();
    setUserMessage('');
  };

  return (
    <Box h='100%' w='100%'>
      <ScrollArea h='95%' mb='20px'>
        <Stack gap='10px'>
          {
            messages.map(message =>
            (<BotMessage
              key={message?.question}
              answer={message?.answer || ''}
              question={message?.question || ''}
              isLoading={isFetching} />))
          }
        </Stack>
      </ScrollArea>
      <Group>
        <TextInput
          flex={1}
          value={userMessage}
          disabled={isFetching}
          onKeyDown={e => {
            if (e.key === 'Enter' && userMessage.length !== 0)
              handleSend();
          }}
          onChange={event => setUserMessage(event.currentTarget.value)}
          styles={{ input: { height: '51px' } }}
          placeholder='Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?'
        />
        <ActionIcon variant='transparent' color='black' h='100%' onClick={() => handleSend()} disabled={userMessage.length === 0}>
          <IconSend />
        </ActionIcon>
      </Group>
    </Box>
  );
};

export default BotChat;
