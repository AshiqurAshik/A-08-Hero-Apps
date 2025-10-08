import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router';

const home = () => {
  const [installApps, setInstallApps] = useState([]);
  
  return (
    <div>
      <Header></Header>
      <Outlet context={{ installApps, setInstallApps }}></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default home;
