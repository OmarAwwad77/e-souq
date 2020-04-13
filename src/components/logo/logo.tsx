import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { Link } from '../nav-items/nav-items.styles';

export const LogoContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: 'Dancing Script', cursive;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
`;

export const LogoSvg = styled(LogoIcon)`
	width: 6rem;
	height: 6rem;
	margin-right: 0.5rem;
`;

const Logo = () => {
	return (
		<Link to='/'>
			<LogoContainer>
				<LogoSvg />
				<span>E-SOUQ</span>
			</LogoContainer>
		</Link>
	);
};

export default Logo;
