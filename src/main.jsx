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

const router = createBrowserRouter([
  {
    path: '/',
    Component: home,

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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
