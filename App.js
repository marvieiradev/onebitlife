import { StatusBar } from 'react-native';
import React from 'react';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"auto"} />
      <Routes />
    </>
  );
}


