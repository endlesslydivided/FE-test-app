import axios, { AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

import { AIBOT_API_KEY, AIBOT_API_URL } from '../../../shared';
import { IBotMessage, IUserMessage } from '../aibot.model';

const AIBOT_SEND_MESSAGE_QUERY_KEY = 'Financial';

type TAiBotResponse = AxiosResponse<IBotMessage>;

const sendMessage = async (body: IUserMessage): Promise<TAiBotResponse> => {

  const headers = {
    'Authorization': `Bearer ${AIBOT_API_KEY}`,
    'Content-Type': 'application/json',
  };
  console.log('headers', headers);
  return await axios.post<IBotMessage>(
    `${AIBOT_API_URL}`,
    body,
    {
      headers
    }
  );
};

export const useSendMessage = (body: IUserMessage): UseQueryResult<TAiBotResponse, Error> => {
  return useQuery<TAiBotResponse, Error>(AIBOT_SEND_MESSAGE_QUERY_KEY,
    () => sendMessage(body), { enabled: false });
};
