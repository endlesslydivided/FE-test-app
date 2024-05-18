import type { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './common/components/layout/Layout';
import { useAuthorization } from './common/hooks/useAuthorization';
import { AuthorizationPage, BotPage, FormPage, SearchPage } from './pages';

const MAIN_PATH = '/main';
const SEARCH_PATH = '/search';
const FORM_PATH = '/form';
const BOT_PATH = '/bot';

const AppRouter: FC = () => {

  const isAuthorized = useAuthorization();

  const mainRoute = isAuthorized ? (
    <Route path={MAIN_PATH} element={<Layout />}>
      <Route element={<MainPage />} index />

      <Route path={MAIN_PATH + SEARCH_PATH} element={<SearchPage />} index />
      <Route path={MAIN_PATH + FORM_PATH} element={<FormPage />} />
      <Route path={MAIN_PATH + BOT_PATH} element={<BotPage />} />

    </Route>)
    : (<Route path='/signin' element={<AuthorizationPage />} />);

  return (
    <BrowserRouter>
      <Routes>
        {mainRoute}
        <Route path='*' element={<Navigate to={isAuthorized ? '/main' : '/signin'} replace={true} />} />
      </Routes>
    </BrowserRouter>);
};

export default AppRouter;
