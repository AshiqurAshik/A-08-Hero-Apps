import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import home from './Components/Home/home.jsx';
import Banner from './Components/banner/Banner.jsx';
import Apps from './Components/Apps/Apps.jsx';
import AppDetail from './Components/appdetails/AppDetail.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AppErrorpage from './Components/Error/AppErrorpage.jsx';
import InstallPage from './Components/Install App/InstallPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: home,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch('/TrendingApp.json'),
        Component: Banner,
      },
      {
        path: 'apps',
        loader: () => fetch('/Apps.json'),
        Component: Apps,
      },
      {
        path: 'apps/:id',
        loader: () => fetch('/Apps.json'),
        Component: AppDetail,
      },
      {
        path: 'install',
        Component: InstallPage,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
