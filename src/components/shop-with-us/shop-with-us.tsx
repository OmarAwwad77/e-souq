import React, { useState, useEffect, useRef } from 'react';

import {
	ShopWithUsWrapper,
	SmallTitle,
	BigTitle,
	ShopButton,
} from './shop-with-us.styles';
import { Link } from '../header/header.styles';

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
			console.log(result);
		}
	};

	return (
		<ShopWithUsWrapper y={positionY} ref={wrapperRef}>
			<SmallTitle>new Arrival</SmallTitle>
			<BigTitle>new boho style</BigTitle>
			<Link to='/shop'>
				<ShopButton>Shop now</ShopButton>
			</Link>
		</ShopWithUsWrapper>
	);
};

export default ShopWithUs;
