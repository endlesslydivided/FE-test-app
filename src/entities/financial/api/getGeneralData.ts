import axios from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

import { FINANCIAL_MODEL_SEARCH_URL } from '../../../shared';
import { IFinancialSearchData, IFinancilSearchParams } from '../financialData.model';

const QUERY_KEY = ['Financial'];

const fetchFinancialData = async (params: IFinancilSearchParams): Promise<IFinancialSearchData> => {
  return await axios.get(
    `${FINANCIAL_MODEL_SEARCH_URL}query=${params.query}`
  );
};

export const useGetGeneralData = (params: IFinancilSearchParams): UseQueryResult<IFinancialSearchData, Error> => {
  return useQuery<IFinancialSearchData, Error>(QUERY_KEY, () => fetchFinancialData(params));
};
