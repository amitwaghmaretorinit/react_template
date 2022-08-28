import { Flex } from '@atom/Flex';
import HomePage from '@pages/HomePage';
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const RoutesComponent = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

const Header = () => {
  return <Flex direction='column' justifyContent={'center'} style={{padding:10,borderBottom:'1px solid'}} bottom={20} >
    <Flex justifyContent={'center'}>
      <img src='https://torinit.com/static/media/loader.e1dc4171.gif' style={{ width: 300 }} />
    </Flex>
  </Flex>
}

export default RoutesComponent;
