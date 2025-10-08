import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './Components/Home/home.jsx';
import Banner from './Components/banner/Banner.jsx';
import Apps from './Components/Apps/Apps.jsx';
import AppDetail from './Components/appdetails/AppDetail.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AppErrorpage from './Components/Error/AppErrorpage.jsx';
import InstallPage from './Components/Install App/InstallPage.jsx';


function RouterWrapper() {
  const [installApps, setInstallApps] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <AppDetail installApps={installApps} setInstallApps={setInstallApps} />,
        },
        {
          path: 'install',
          element: <InstallPage installApps={installApps} setInstallApps={setInstallApps} />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>
);