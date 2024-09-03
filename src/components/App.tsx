import React, { VFC } from 'react';
import { TCanvas } from './three/TCanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/global.css';

export const App: VFC = () => {
  return (
    <div className='appmaindiv'>
      <TCanvas />
    </div>
  );
};
