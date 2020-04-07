import React, { useState, useEffect, useCallback } from 'react';

import CartIcon from '../cart-icon/cart-icon';
import {
	HeaderWrapper,
	LogoContainer,
	Logo,
	NavLinks,
	NavLinkContainer,
	NavLink,
	Link,
} from './header.styles';

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
			<Link to='/'>
				<LogoContainer>
					<Logo />
					<span>E-SOUQ</span>
				</LogoContainer>
			</Link>

			<NavLinks>
				<NavLinkContainer>
					<NavLink to='/shop'>Shop</NavLink>
				</NavLinkContainer>

				<NavLinkContainer>
					<NavLink to='/checkout'>Checkout</NavLink>
				</NavLinkContainer>

				<NavLinkContainer>
					<NavLink to='/sign'>Sign In</NavLink>
				</NavLinkContainer>

				<Link to='/cart'>
					<CartIcon />
				</Link>
			</NavLinks>
		</HeaderWrapper>
	);
};

export default Header;
