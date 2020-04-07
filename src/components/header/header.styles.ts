import styled, {
	css,
	keyframes,
	FlattenSimpleInterpolation,
} from 'styled-components';
import { NavLink as RawNavLink, Link as RawLink } from 'react-router-dom';

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
	padding: 0 ${(p) => p.theme.spacer.XS};
	${(p: StyledHeaderProps) => positionStyles(p.sticky)};
	box-shadow: 0px 1px 13px
		${(p: StyledHeaderProps) => (p.sticky ? 'lightgray' : 'transparent')};
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

export const NavLinks = styled.ul`
	width: 30.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;

	.active:after {
		left: 0%;
		width: 100%;
	}
`;

export const NavLinkContainer = styled.li`
	text-transform: uppercase;
	font-size: 1.6rem;
	font-style: italic;
`;

const linkStyles = css`
	text-decoration: none;
	color: inherit;
`;

export const NavLink = styled(RawNavLink)`
	${linkStyles}
	${(p) => p.theme.mixins.hoverable};
`;

export const Link = styled(RawLink)`
	${linkStyles}
`;
