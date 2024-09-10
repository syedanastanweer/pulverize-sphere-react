import React, { VFC, useMemo } from 'react';
import * as THREE from 'three';

export const Particles: VFC = () => {
	const particlesCount = 1000;
	const positions = useMemo(() => {
		const arr = new Float32Array(particlesCount * 3);
		for (let i = 0; i < particlesCount * 3; i++) {
			arr[i] = (Math.random() - 0.5) * 5;
		}
		return arr;
	}, [particlesCount]);

	return (
		<points>
			<bufferGeometry attach="geometry">
				<bufferAttribute
					attachObject={['attributes', 'position']}
					array={positions}
					itemSize={3}
					count={particlesCount}
				/>
			</bufferGeometry>
			<pointsMaterial
				attach="material"
				color="#ffffff"
				size={0.05}
				sizeAttenuation
			/>
		</points>
	);
};
