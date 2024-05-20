import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { BotLayout } from '../widgets/BotLayout';
import { Layout } from '../widgets/layout';
import { BotPage, MainPage, SearchPage } from './authorized';
import { useAuth } from './context';
import { AuthorizationPage } from './unauthorized';

export const MAIN_PATH = '/main';
export const SEARCH_PATH = '/search';
export const BOT_PATH = '/bot';
export const SIGNIN_PATH = '/signin';

const AppRouter = () => {

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

          <Route path='*' element={<Navigate to={MAIN_PATH} />} />
        </Route>
        <Route path='*' element={<Navigate to={MAIN_PATH} />} />
      </Route>
    )
    : (
      <Route>
        <Route path={SIGNIN_PATH} element={<AuthorizationPage />} index />
        <Route path='*' element={<Navigate to={SIGNIN_PATH} />} />
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
