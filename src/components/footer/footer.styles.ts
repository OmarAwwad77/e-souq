import styled, { css } from 'styled-components';

import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/envelope.svg';

export const FooterWrapper = styled.section`
	grid-area: footer;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const FooterItem = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	font-size: 1.4rem;
`;

export const IconStyled = css`
	width: 2.5rem;
	height: 2.5rem;
	fill: #fff;
	margin-right: 1rem;
`;

export const GitHubIconStyled = styled(GitHubIcon)`
	${IconStyled}
`;

export const EmailIconStyled = styled(EmailIcon)`
	${IconStyled}
`;

export const GitHubAccount = styled.a`
	text-decoration: none;
	color: #fff;
	cursor: pointer;
`;
