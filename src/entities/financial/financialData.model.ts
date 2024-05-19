export interface IFinancilSearchParams {
  query: string,
  limit?: number,
}

export interface IFinancialSearchData {
  symbol: string | null,
  name: string,
  currency: string | null,
  stockExchange: string | null,
  exchangeShortName: string | null,
}

export type TGeneralSearchResponse = Array<IFinancialSearchData>
