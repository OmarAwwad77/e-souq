import React from 'react';
import { connect } from 'react-redux';

import Logo from '../logo/logo';
import NavItems from '../nav-items/nav-items';
import { User } from '../../redux/user/user.types';
import { selectUser } from '../../redux/user/user.selectors';
import { AppState } from '../../redux/root.reducer';
import { createStructuredSelector } from 'reselect';
import { Backdrop } from '../with-error/with-unknown-error';
import { NavItemsWrapper, LogoWrapper } from './side-bar.styles';
import { OuterWrapperAnimated } from './side-bar.springs';

interface LinkStateProps {
	user: User | null;
}
interface OwnProps {
	show?: boolean;
	closeSideBar: () => void;
}
type Props = OwnProps & LinkStateProps;

const SideBar: React.FC<Props> = ({ user, show, closeSideBar }) => {
	return (
		<>
			{show && <Backdrop onClick={closeSideBar} />}
			<OuterWrapperAnimated show={show} onClick={closeSideBar}>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<NavItemsWrapper>
					<NavItems mobile user={user} />
				</NavItemsWrapper>
			</OuterWrapperAnimated>
		</>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	user: selectUser,
});

export default connect(mapStateToProps)(SideBar);
