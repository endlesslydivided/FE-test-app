import axios, { AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

import { AIBOT_API_KEY, AIBOT_API_URL, HEROKU_CORS_URL } from '../../../shared';
import { IBotMessage, IUserMessage } from '../aibot.model';

const AIBOT_SEND_MESSAGE_QUERY_KEY = 'Financial';

type TAiBotResponse = AxiosResponse<IBotMessage>;

const sendMessage = async (body: IUserMessage): Promise<TAiBotResponse> => {
  return await axios.post<IBotMessage>(
    `${HEROKU_CORS_URL}${AIBOT_API_URL}`,
    body,
    {
      headers: {
        'x-api-key': AIBOT_API_KEY,
        'content-type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
    }
  );
};

export const useSendMessage = (body: IUserMessage): UseQueryResult<TAiBotResponse, Error> => {
  return useQuery<TAiBotResponse, Error>(AIBOT_SEND_MESSAGE_QUERY_KEY,
    () => sendMessage(body), { enabled: false });
};
