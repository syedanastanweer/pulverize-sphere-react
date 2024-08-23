import React, { VFC } from 'react';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	return (
		<div className='appmaindiv'>
			<TCanvas />
			{/* <LinkIconButton
				imagePath="/assets/icons/github.svg"
				linkPath="https://github.com/nemutas/r3f-gyroid-sphere-operable"
			/> */}
		</div>
	)
}
