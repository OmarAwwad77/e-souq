import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { Button } from './categories-container.styles';

export const ButtonAnimated: React.FC<{
	children: any;
}> = ({ children }) => {
	const [visibilityState, setVisibilityState] = useState(false);

	const animation = useSpring({
		from: { transform: 'translate(-50%, -50%) scale(0.1)' },
		to: {
			transform: visibilityState
				? 'translate(-50%, -50%) scale(1)'
				: 'translate(-50%, -50%) scale(0.1)',
		},
		config: { mass: 1, tension: 170, friction: 11 },
	});

	const AnimatedButton = animated(Button);

	return (
		<VisibilitySensor
			active={!visibilityState}
			onChange={(isVisible) => setVisibilityState(isVisible)}
		>
			<AnimatedButton style={animation}>{children}</AnimatedButton>
		</VisibilitySensor>
	);
};
