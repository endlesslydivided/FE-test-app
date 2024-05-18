import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthorizationPage, MainLayout, MainPage } from './pages';

interface IAppRouterProps {}

const AppRouter: FC<IAppRouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}> 
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/signin' element={<AuthorizationPage/>}/>
        </Route>
      </Routes>  
    </BrowserRouter>);
};

export default AppRouter;
