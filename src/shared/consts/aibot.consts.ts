import { env } from '../utils';

export const AIBOT_API_KEY = env('REACT_APP_AI_ANTHROPIC_API_KEY');

export const AIBOT_API_URL = 'https://api.anthropic.com/v1/messages';

export const HEROKU_CORS_URL = 'https://cors-anywhere.herokuapp.com/';
