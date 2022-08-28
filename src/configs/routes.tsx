import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Flex } from '@atom/Flex';
import HomePage from '@pages/HomePage';

const RoutesComponent = () => {

  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

const Splash = () => {
  return <Flex direction='column' justifyContent={'center'} style={{ height: '100vh' }}>
    <Flex justifyContent={'center'}>
      <img src='https://torinit.com/static/media/loader.e1dc4171.gif' style={{ width: 300 }} />
    </Flex>
  </Flex>
}

export default RoutesComponent;
