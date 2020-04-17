import React from 'react';
import { animated, useTrail } from 'react-spring';
import { NavLinksDesktop, NavLinksMobile } from './nav-items.styles';

export const NavLinksDesktopAnimated: React.FC<{
	children: JSX.Element[];
}> = ({ children }) => {
	const springs = useTrail(children.length, {
		from: {
			transform: `translateY(-5rem)`,
			backfaceVisibility: 'hidden' as const,
		},
		to: { transform: `translateY(0)` },
		config: { mass: 1, tension: 170, friction: 13 },
	});
	return (
		<NavLinksDesktop>
			{springs.map((animation, index) => {
				return (
					<animated.div key={index} style={animation}>
						{children[index]}
					</animated.div>
				);
			})}
		</NavLinksDesktop>
	);
};

export const NavLinksMobileAnimated: React.FC<{
	children: JSX.Element[];
}> = ({ children }) => {
	const springs = useTrail(children.length, {
		from: {
			transform: `translateX(15rem)`,
			backfaceVisibility: 'hidden' as const,
		},
		to: { transform: `translateX(0)` },
		config: { mass: 1, tension: 170, friction: 13 },
	});
	return (
		<NavLinksMobile>
			{springs.map((animation, index) => {
				return (
					<animated.div key={index} style={animation}>
						{children[index]}
					</animated.div>
				);
			})}
		</NavLinksMobile>
	);
};
