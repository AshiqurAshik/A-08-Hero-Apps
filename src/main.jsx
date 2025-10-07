import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import home from './Components/Home/home.jsx';
import Banner from './Components/banner/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: home,

    children: [
      { index: true, Component: Banner }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
