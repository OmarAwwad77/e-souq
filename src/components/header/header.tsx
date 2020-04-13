import React, {
	useState,
	useEffect,
	useCallback,
	Dispatch,
	SetStateAction,
} from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectUser } from '../../redux/user/user.selectors';
import { HeaderWrapper } from './header.styles';
import { AppState } from '../../redux/root.reducer';
import { User } from '../../redux/user/user.types';
import MenuIcon from '../menu-icon/menu-icon';
import NavItems from '../nav-items/nav-items';
import Logo from '../logo/logo';

interface OwnProps {
	toggleSideBar: Dispatch<SetStateAction<boolean>>;
}
interface LinkDispatchProps {}
interface LinkStateProps {
	user: User | null;
}

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

const Header: React.FC<Props> = ({ user, toggleSideBar }) => {
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
			<Logo />
			<NavItems user={user} />
			<MenuIcon toggleSideBar={toggleSideBar} />
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
