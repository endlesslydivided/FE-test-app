import { FINANCIAL_MODEL_SEARCH_URL, IFinancialSearchData, IFinancilSearchParams } from '../../../shared';
import axios from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

const QUERY_KEY = ['Financial'];

const fetchFinancialData = async (params: IFinancilSearchParams): Promise<IFinancialSearchData> => {
  return await axios.get(
    `${FINANCIAL_MODEL_SEARCH_URL}query=${params.query}`
  );
};

export const useGetGeneralData = (params: IFinancilSearchParams): UseQueryResult<IFinancialSearchData, Error> => {
  return useQuery<IFinancialSearchData, Error>(QUERY_KEY, () => fetchFinancialData(params));
};
