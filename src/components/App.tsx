import React, { VFC } from 'react';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
  return (
    <div className='appmaindiv'>
      <TCanvas />
    </div>
  )
}
