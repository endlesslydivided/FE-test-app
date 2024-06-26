import { env } from '../utils';

export const FINANCIAL_MODEL_API_URL = 'https://financialmodelingprep.com/api/v3';

export const FINANCIAL_MODEL_SEARCH_URL = FINANCIAL_MODEL_API_URL + '/search?';

export const FINANCIAL_DATA_API_KEY = env('REACT_APP_FINANCIAL_DATA_API_KEY');
