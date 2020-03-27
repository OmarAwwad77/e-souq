import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/envelope.svg';

const FooterWrapper = styled.section`
	grid-area: footer;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const FooterItem = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	font-size: 1.4rem;
`;

const IconStyled = css`
	width: 2.5rem;
	height: 2.5rem;
	fill: #fff;
	margin-right: 1rem;
`;

const GitHubIconStyled = styled(GitHubIcon)`
	${IconStyled}
`;

const EmailIconStyled = styled(EmailIcon)`
	${IconStyled}
`;

const GitHubAccount = styled.a`
	text-decoration: none;
	color: #fff;
	cursor: pointer;
`;

const footer = () => {
	return (
		<FooterWrapper>
			<FooterItem>
				<GitHubIconStyled />
				<GitHubAccount href='https://github.com/OmarAwwad77' target='_black'>
					GitHubAccount
				</GitHubAccount>
			</FooterItem>
			<FooterItem>
				<EmailIconStyled />
				<span> OmarAwwad010@gmail.com </span>
			</FooterItem>
		</FooterWrapper>
	);
};

export default footer;
