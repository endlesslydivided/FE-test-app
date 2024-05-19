import type { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../common/components/layout/Layout';
import { useAuth } from '../common/context/UserContext/UserProvider';
import { BotPage, MainPage, SearchPage } from './authorized';
import { AuthorizationPage } from './unauthorized';
import { BotLayout } from '../common/components/BotLayout/BotLayout';

export const MAIN_PATH = '/main';
export const SEARCH_PATH = '/search';
export const BOT_PATH = '/bot';
export const SIGNIN_PATH = '/signin';

const AppRouter: FC = () => {

  const { auth } = useAuth();

  const mainRoute = auth?.isSignedIn 
    ? (
      <Route>
        <Route path={MAIN_PATH}>

          <Route element={<Layout />}>
            <Route element={<MainPage />} index />
            <Route path={MAIN_PATH + SEARCH_PATH} element={<SearchPage />} index />
          </Route>

          <Route element={<BotLayout />}>
            <Route path={MAIN_PATH + BOT_PATH} element={<BotPage />} />
          </Route>
         
          <Route path='*' element={<Navigate to={MAIN_PATH}/>} />
        </Route>
        <Route path='*' element={<Navigate to={MAIN_PATH}/>} />
      </Route>
    )
    : (
      <Route>
        <Route path={SIGNIN_PATH} element={<AuthorizationPage />} index/>
        <Route path='*' element={<Navigate to={SIGNIN_PATH}/>} />
      </Route>
    );

  return (
    <BrowserRouter>
      <Routes>
        {mainRoute}
      </Routes>
    </BrowserRouter>);
};

export default AppRouter;
