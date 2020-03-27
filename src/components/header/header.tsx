import React, { useState, useEffect, useCallback } from 'react';

import { ReactComponent as CardIcon } from '../../assets/cart.svg';
import {
	HeaderWrapper,
	LogoContainer,
	Logo,
	Nav,
	NavLinks,
	NavLink,
	CartIconContainer,
	CartItemsNumber
} from './headerStyles';

const Header = () => {
	const [isSticky, setSticky] = useState<boolean>(false);

	const handleScrolling = useCallback(() => {
		const topScroll: number = document.scrollingElement?.scrollTop ?? 0;
		if (topScroll >= 55 && !isSticky) {
			setSticky(true);
		} else if (topScroll < 55 && isSticky) {
			setSticky(false);
		}
	}, [isSticky]);

	useEffect(() => {
		document.addEventListener('scroll', handleScrolling);
		return () => {
			document.removeEventListener('scroll', handleScrolling);
		};
	}, [handleScrolling]);

	return (
		<HeaderWrapper sticky={isSticky}>
			<LogoContainer>
				<Logo />
				<span>E-SOUQ</span>
			</LogoContainer>

			<Nav>
				<NavLinks>
					<NavLink>Shop</NavLink>
					<NavLink>Checkout</NavLink>
					<NavLink>Sign up</NavLink>
					<CartIconContainer>
						<CardIcon />
						<CartItemsNumber>0</CartItemsNumber>
					</CartIconContainer>
				</NavLinks>
			</Nav>
		</HeaderWrapper>
	);
};

export default Header;
