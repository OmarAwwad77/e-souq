import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import Logo from '../logo/logo';
import NavItems from '../nav-items/nav-items';
import { User } from '../../redux/user/user.types';
import { selectUser } from '../../redux/user/user.selectors';
import { AppState } from '../../redux/root.reducer';
import { createStructuredSelector } from 'reselect';
import { Backdrop } from '../with-error/with-unknown-error';

const OuterWrapper = styled.div<{ show?: boolean }>`
	position: fixed;
	right: ${(p) => (p.show ? '0' : '-50%')};
	top: 0;
	z-index: 4;
	max-width: 45%;
	width: 25rem;
	height: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 5rem 0;
	transition: all 0.4s ease-out;
`;

const LogoWrapper = styled.div`
	height: 30%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavItemsWrapper = styled.div`
	height: 70%;
	width: 100%;
`;

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
			<OuterWrapper show={show} onClick={closeSideBar}>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<NavItemsWrapper>
					<NavItems mobile user={user} />
				</NavItemsWrapper>
			</OuterWrapper>
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
