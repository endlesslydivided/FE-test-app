import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryContextProvider } from '@common/context';
import '@mantine/core/styles.css';

import AppRouter from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryContextProvider>
      <AppRouter/>
    </QueryContextProvider>
  </React.StrictMode>
);

