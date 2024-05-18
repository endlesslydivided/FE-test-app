export interface IFinancilSearchParams {
  query: string,
}

export interface IFinancialSearchData {
  symbol: string,
  name: string,
  currency: string,
  stockExchange: string,
  exchangeShortName: string,
}
  
export type TGeneralSearchResponse = Array<IFinancialSearchData>
