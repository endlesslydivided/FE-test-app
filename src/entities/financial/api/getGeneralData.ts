/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

import { FINANCIAL_DATA_API_KEY, FINANCIAL_MODEL_SEARCH_URL } from '../../../shared';
import { IFinancialSearchData, IFinancilSearchParams } from '../financialData.model';

const FINANCIAL_QUERY_KEY = 'Financial';
const PREFETCH_QUERY_KEY = 'Prefetch_Financial';

type TGeneralData = Array<IFinancialSearchData>;
type TGeneralDataResponse = AxiosResponse<TGeneralData>;

const fetchFinancialData = async (params: IFinancilSearchParams): Promise<TGeneralDataResponse> => {
  return await axios.get<Array<IFinancialSearchData>>(
    `${FINANCIAL_MODEL_SEARCH_URL}`,
    {
      params: {
        apikey: FINANCIAL_DATA_API_KEY,
        query: params.query || 'a',
        limit: params?.limit,
      },
    }
  );
};

export const useGetGeneralData = (params: IFinancilSearchParams): UseQueryResult<TGeneralDataResponse, Error> => {
  return useQuery<TGeneralDataResponse, Error>(FINANCIAL_QUERY_KEY,
    () => fetchFinancialData({ ...params, limit: 50 }), { enabled: false });
};

export const usePrefetchGeneralData = (params: IFinancilSearchParams): UseQueryResult<TGeneralDataResponse, Error> => {
  return useQuery<TGeneralDataResponse, Error>(PREFETCH_QUERY_KEY, () => fetchFinancialData({ ...params, limit: 10 }));
};
