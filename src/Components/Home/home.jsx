import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router';

const home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default home;
