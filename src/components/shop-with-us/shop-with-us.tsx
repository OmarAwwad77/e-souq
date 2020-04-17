import React, { useState, useEffect, useRef } from 'react';

import {
	ShopWithUsWrapper,
	ShopButton,
	BigTitle,
	SmallTitle,
} from './shop-with-us.styles';
import { AnimatedOnReveal } from './shop-with-us.springs';
import { Link } from '../nav-items/nav-items.styles';

const ShopWithUs = () => {
	const wrapperRef = useRef<HTMLElement>(null);
	const offSetTop = useRef<number>();

	const [positionY, setPositionY] = useState<number>(0);

	useEffect(() => {
		offSetTop.current = wrapperRef?.current?.offsetTop! - 500;
		document.addEventListener('scroll', checkScrollPosition);
		return () => {
			document.removeEventListener('scroll', checkScrollPosition);
		};
	}, []);

	const checkScrollPosition = () => {
		const scrollPosition: number = document.scrollingElement?.scrollTop!;

		if (scrollPosition! >= offSetTop.current!) {
			const divisionResult = scrollPosition / offSetTop.current!;
			const result = divisionResult * 2 * 30;
			setPositionY(result);
		}
	};

	return (
		<ShopWithUsWrapper y={positionY} ref={wrapperRef}>
			<AnimatedOnReveal
				once
				partialVisibility
				useSpringProps={{
					from: { transform: 'translateX(-50%)' },
					to: { transform: 'translateX(0%)' },
				}}
				Component={SmallTitle}
			>
				new Arrival
			</AnimatedOnReveal>

			<AnimatedOnReveal
				once
				partialVisibility
				useSpringProps={{
					from: { transform: 'translateX(50%)' },
					to: { transform: 'translateX(0%)' },
				}}
				Component={BigTitle}
			>
				new boho style
			</AnimatedOnReveal>

			<AnimatedOnReveal
				once
				partialVisibility
				useSpringProps={{
					from: { transform: 'translateY(10rem)' },
					to: { transform: 'translateX(0)' },
				}}
			>
				<Link to='/shop'>
					<ShopButton>Shop now</ShopButton>
				</Link>
			</AnimatedOnReveal>
		</ShopWithUsWrapper>
	);
};

export default ShopWithUs;
