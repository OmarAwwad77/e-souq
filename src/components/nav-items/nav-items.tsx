import React from 'react';

import CartIcon from '../cart-icon/cart-icon';
import { User } from '../../redux/user/user.types';
import { NavLink, NavLinkContainer, Link } from './nav-items.styles';
import {
	NavLinksDesktopAnimated,
	NavLinksMobileAnimated,
} from './nav-items.springs';

type OwnProps = {
	user: User | null;
	mobile?: boolean;
};

type Props = OwnProps;

const NavItems: React.FC<Props> = ({ user, mobile }) => {
	const NavLinks = mobile ? NavLinksMobileAnimated : NavLinksDesktopAnimated;
	return (
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
	);
};

export default NavItems;
