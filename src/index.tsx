import { MantineProvider, ScrollArea, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './app/Router';
import { QueryContextProvider } from './common/context';
import { UserProvider } from './common/context/UserContext/UserProvider';
import './index.css';
import checkboxClasses from './theme/checkboxTheme.module.css';
import selectClasses from './theme/selectTheme.module.css';
import textAreaClasses from './theme/textAreaTheme.module.css';
import textInputClasses from './theme/textInputTheme.module.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  components: {
    TextInput: {
      classNames: {
        root: textInputClasses.textInputRoot,
        label: textInputClasses.textInputLabel,
        input: textInputClasses.textInputInput,
        error: textInputClasses.textInputError,
      },
    },
    PasswordInput: {
      classNames: {
        root: textInputClasses.textInputRoot,
        label: textInputClasses.textInputLabel,
        input: textInputClasses.textInputInput,
        error: textInputClasses.textInputError,
      },
    },
    Textarea: {
      classNames: {
        label: textAreaClasses.textAreaLabel,
        input: textAreaClasses.textAreaInput,
        error: textAreaClasses.textAreaError,
      },
    },
    Select: {
      classNames: {
        label: selectClasses.selectLabel,
        input: selectClasses.selectInput,
        error: selectClasses.selectError,
      },
    },
    Checkbox: {
      classNames: {
        label: checkboxClasses.checkboxLabel,
        input: checkboxClasses.checkboxInput,
      },
    },
    CheckboxGroup: {
      classNames: {
        error: checkboxClasses.checkboxGroupError,
      },
    },
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
    <UserProvider>
      <MantineProvider theme={theme}>
        <ScrollArea h='100%'>
          <QueryContextProvider>
            <Notifications />
            <AppRouter/>
          </QueryContextProvider>
        </ScrollArea>
      </MantineProvider>
    </UserProvider>
  </React.StrictMode>
);

