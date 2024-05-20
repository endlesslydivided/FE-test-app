import type { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface IQueryContextProviderProps extends PropsWithChildren {}

export const queryClient = new QueryClient();

export const QueryContextProvider: FC<IQueryContextProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

