import styled, { css } from 'styled-components';

import imageUrl from '../../assets/shop-with-us.jpg';

export const ShopWithUsWrapper = styled.section`
	margin: ${p => p.theme.spacer.M} 0;
	background-image: url(${imageUrl});
	background-position: ${(p: { y: number }) => css`50% calc(100% - ${p.y}%)`};
	background-repeat: no-repeat;
	height: 45rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
`;

export const SmallTitle = styled.span`
	font-family: ${p => p.theme.fonts.zilla};
	font-size: 2.4rem;
	letter-spacing: 2.6rem;
	line-height: 1.2em;
	text-transform: uppercase;
	color: #fff;
`;

export const BigTitle = styled.h1`
	font-family: ${p => p.theme.fonts.zilla};
	font-size: 7rem;
	letter-spacing: 0.7rem;
	line-height: 1.2em;
	text-transform: uppercase;
	color: #fff;
	margin: 1rem 0;
`;

export const ShopButton = styled.button`
	cursor: pointer;
	border: none;
	width: 19rem;
	height: 6rem;
	background-color: #fff;
	transition: all 0.3s ease-out;
	font-family: ${p => p.theme.fonts.zilla};
	font-size: 1.6rem;
	text-transform: uppercase;

	&:hover {
		background-color: black;
		color: #fff;
	}
`;
