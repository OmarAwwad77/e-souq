import styled, { css } from 'styled-components';
import { NavLink as RawNavLink, Link as RawLink } from 'react-router-dom';

import MediaQueries from '../../media-queries';

const navLinksStyles = css`
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

export const NavLinksDesktop = styled.ul`
	${navLinksStyles}
	width: 30.4rem;

	${MediaQueries.BREAK_POINT_650_PX(css`
		display: none;
	`)}
`;

export const NavLinksMobile = styled.ul`
	${navLinksStyles}
	overflow: hidden;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: space-evenly;
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

export const NavLinkContainer = styled.li`
	text-transform: uppercase;
	font-size: 1.6rem;
	font-style: italic;
`;
