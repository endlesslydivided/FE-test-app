import {
  Button,
} from '@mantine/core';
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import classes from './Layout.module.css';

export const HeaderButton: FC<PropsWithChildren & {onClick?: MouseEventHandler<HTMLButtonElement>}> = ({ children, onClick }) => {

  return (<Button variant='default' onClick={onClick} classNames={{
    root: classes.rootButton,
    inner: classes.innerButton,
    label: classes.labelButton,
  }}>
    {children}
  </Button>);

};
