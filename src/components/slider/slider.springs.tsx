import React from 'react';
import { animated, useSpring } from 'react-spring';

import { SliderText } from './slider.styles';

export const SliderTextAnimated: React.FC<{
	children: any;
}> = ({ children }) => {
	const { opacity, x } = useSpring({
		from: {
			opacity: 0,
			x: 0,
		},
		to: { opacity: 1, x: 1 },
		config: { mass: 1, tension: 95, friction: 5 },
	});

	const AnimatedText = animated(SliderText);

	return (
		<AnimatedText
			style={{
				opacity: opacity,
				transform: x
					.interpolate({
						range: [0, 1],
						output: [20, 0] as readonly number[],
					})
					.interpolate((x) => `translateX(${x}rem)`),
			}}
		>
			{children}
		</AnimatedText>
	);
};
