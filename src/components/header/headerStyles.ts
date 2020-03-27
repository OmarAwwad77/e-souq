import styled, {
	css,
	keyframes,
	FlattenSimpleInterpolation
} from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

interface StyledHeaderProps {
	sticky: boolean;
}

const stickyAnimIn = keyframes`
    from {
        position: absolute;
        background-color: transparent;
        opacity:0;
        height: 0;
    }

    to{
        position: fixed;
        background-color: #fff;
        opacity: 1;
        height: 6rem;
    }
`;

const stickyAnimOut = keyframes`
	from{
        position: fixed;
        background-color: #fff;
    }

	to{
		position: absolute;
        background-color: transparent;
	}
`;

const positionStyles = (sticky: boolean): FlattenSimpleInterpolation => {
	return sticky
		? css`
				animation: ${stickyAnimIn} 0.3s ease-out forwards;
		  `
		: css`
				animation: ${stickyAnimOut} 0.3s ease-out forwards;
		  `;
};

export const HeaderWrapper = styled.header`
	z-index: 2;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	padding: 0 2rem;
	${(p: StyledHeaderProps) => positionStyles(p.sticky)};
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: 'Dancing Script', cursive;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
`;

export const Logo = styled(LogoIcon)`
	width: 6rem;
	height: 6rem;
	margin-right: 0.5rem;
`;

export const Nav = styled.nav`
	width: 33.4rem;
`;

export const NavLinks = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
`;

export const NavLink = styled.li`
	position: relative;
	text-transform: uppercase;
	font-size: 1.6rem;
	font-style: italic;
	cursor: pointer;
	&::after {
		content: '';
		position: absolute;
		top: 100%;
		right: 0%;
		background-color: black;
		height: 1px;
		width: 0%;
		transition: width 0.3s ease-in-out;
	}

	&:hover:after {
		left: 0%;
		width: 100%;
	}
`;

export const CartIconContainer = styled.li`
	position: relative;
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
`;

export const CartItemsNumber = styled.span`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.2rem;
`;
