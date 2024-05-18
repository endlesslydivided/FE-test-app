import { FINANCIAL_MODEL_SEARCH_URL, IFinancialSearchData, IFinancilSearchParams } from '@test-app/shared';
import { UseQueryResult, useQuery } from 'react-query';
import { queryClient } from '@common/context';

const QUERY_KEY = ['Financial'];

const fetchFinancialData = async (params: IFinancilSearchParams): Promise<IFinancialSearchData> => {
  const { data } = await queryClient.get(`${FINANCIAL_MODEL_SEARCH_URL}query=${params.query}`);
  return data;
};

export const useGetGeneralData = (params: IFinancilSearchParams): UseQueryResult<IFinancialSearchData, Error> => {
  return useQuery<IFinancialSearchData, Error>(QUERY_KEY, () => fetchFinancialData(params));
};
