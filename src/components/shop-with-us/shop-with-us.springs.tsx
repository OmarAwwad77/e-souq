import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { animated, useSpring, UseSpringProps } from 'react-spring';

export const AnimatedOnReveal: React.FC<{
	once?: boolean;
	partialVisibility?: boolean;
	useSpringProps: UseSpringProps;
	children?: any;
	Component?: React.ComponentType<{ children?: any }>;
}> = ({ useSpringProps, Component, children, once, partialVisibility }) => {
	const [visibilityState, setVisibilityState] = useState(false);

	const animation = useSpring({
		from: useSpringProps.from,
		to: visibilityState ? useSpringProps.to : useSpringProps.from,
	} as UseSpringProps);

	const AnimatedComponent = Component ? animated(Component) : null;

	return (
		<VisibilitySensor
			active={once ? !visibilityState : true}
			partialVisibility={partialVisibility}
			onChange={(isVisible) => setVisibilityState(isVisible)}
		>
			{AnimatedComponent ? (
				<AnimatedComponent style={animation}>{children}</AnimatedComponent>
			) : (
				<animated.div style={animation}>{children}</animated.div>
			)}
		</VisibilitySensor>
	);
};
