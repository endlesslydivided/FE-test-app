import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AppRouter from './Router';
import { QueryContextProvider } from './common/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  components: {
    Text: {
      styles: { 
        root: {
          lineHeight: '100%',
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <QueryContextProvider>
        <AppRouter/>
      </QueryContextProvider>
    </MantineProvider>
  </React.StrictMode>
);

