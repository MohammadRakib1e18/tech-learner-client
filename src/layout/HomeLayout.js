import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Home/Banner/Banner';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const HomeLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
};

export default HomeLayout;