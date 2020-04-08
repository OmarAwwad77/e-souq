import React, { useState, useEffect, useCallback } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectUser } from '../../redux/user/user.selectors';
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
import { AppState } from '../../redux/root.reducer';
import { User } from '../../redux/user/user.types';

interface OwnProps {}
interface LinkDispatchProps {}
interface LinkStateProps {
	user: User | null;
}

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

const Header: React.FC<Props> = ({ user }) => {
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
					<NavLink to={user ? '/sign-out' : '/sign'}>
						{user ? 'Sign Out' : 'Sign In'}
					</NavLink>
				</NavLinkContainer>

				<Link to='/cart'>
					<CartIcon />
				</Link>
			</NavLinks>
		</HeaderWrapper>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	user: selectUser,
});

export default connect(mapStateToProps)(Header);
