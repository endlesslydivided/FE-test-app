import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps {}

export const MainLayout: FC<IMainLayoutProps> = () => {
  return (<Outlet/>);
};
