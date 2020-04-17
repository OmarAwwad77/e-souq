import React from 'react';
import { useTransition, animated } from 'react-spring';

import { OuterWrapper } from './side-bar.styles';

export const OuterWrapperAnimated: React.FC<{
	show?: boolean;
	children: React.ReactNode;
	onClick: () => void;
}> = ({ show, children, onClick }) => {
	const transition = useTransition(show, null, {
		from: { right: '-50%' },
		enter: { right: '0' },
		leave: { right: '-50%' },
	});

	const AnimatedWrapper = animated(OuterWrapper);

	return (
		<>
			{transition.map(({ item, key, props }) => {
				return (
					item && (
						<AnimatedWrapper onClick={onClick} key={key} style={props}>
							{children}
						</AnimatedWrapper>
					)
				);
			})}
		</>
	);
};

// import { OuterWrapper as RawOuterWrapper } from './side-bar.styles';

// interface OuterWrapperOwnProps {
// 	show?: boolean;
// 	children: React.ReactNode;
// 	onClick: () => void;
// }
// type Position = CSSProperties['position'];

// const OuterWrapper = styled(RawOuterWrapper)`
// 	position: unset;
// 	top: unset;
// 	right: unset;
// 	z-index: unset;
// 	max-width: unset;
// 	width: unset;
// `;

// export const OuterWrapperAnimated: React.FC<OuterWrapperOwnProps> = ({
// 	show,
// 	children,
// 	onClick,
// }) => {
// 	const transition = useTransition(show, null, {
// 		from: {
// 			right: '-50%',
// 			position: 'fixed' as Position,
// 			top: 0,
// 			zIndex: 4,
// 			width: '25rem',
// 			maxWidth: '45%',
// 			height: '100%',
// 		},
// 		enter: { right: '0' },
// 		leave: { right: '-50%' },
// 	});

// 	return (
// 		<>
// 			{transition.map(({ item, key, props }) => {
// 				return (
// 					item && (
// 						<animated.div onClick={onClick} key={key} style={props}>
// 							<OuterWrapper>{children}</OuterWrapper>
// 						</animated.div>
// 					)
// 				);
// 			})}
// 		</>
// 	);
// };
