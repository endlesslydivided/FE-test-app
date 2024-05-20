import {
  Button,
} from '@mantine/core';
import type { MouseEventHandler, PropsWithChildren } from 'react';

import classes from './Layout.module.css';

export const HeaderButton = ({ children, onClick }: PropsWithChildren & { onClick?: MouseEventHandler<HTMLButtonElement> }) => {

  return (<Button variant='default' onClick={onClick} classNames={{
    root: classes.rootButton,
    inner: classes.innerButton,
    label: classes.labelButton,
  }}>
    {children}
  </Button>);

};
