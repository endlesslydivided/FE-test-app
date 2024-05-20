import { env } from '../utils';

export const AIBOT_API_KEY = env('REACT_APP_AI_GPT_API_KEY');
export const AIBOT_PROJECT_ID = env('REACT_APP_GPT_PROJECT_ID');

export const AIBOT_API_URL = 'https://api.openai.com/v1/chat/completions';

export const HEROKU_CORS_URL = 'https://cors-anywhere.herokuapp.com/';
