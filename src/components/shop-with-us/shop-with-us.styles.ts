import styled, { css } from 'styled-components';
import MediaQueries from '../../media-queries';

import imageUrl from '../../assets/shop-with-us.jpg';

export const ShopWithUsWrapper = styled.section`
	margin: ${(p) => p.theme.spacer.M} 0;
	background-image: url(${imageUrl});
	background-position: ${(p: { y: number }) => css`50% calc(100% - ${p.y}%)`};
	background-repeat: no-repeat;
	height: 45rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;

	${MediaQueries.BREAK_POINT_820_PX(css`
		background-position-x: 67%;
	`)}
`;

export const SmallTitle = styled.span`
	font-family: ${(p) => p.theme.fonts.zilla};
	font-size: 2.4rem;
	letter-spacing: 2.6rem;
	line-height: 1.2em;
	text-transform: uppercase;
	color: #fff;
	text-align: center;

	${MediaQueries.BREAK_POINT_650_PX(css`
		letter-spacing: 1.7rem;
		font-size: 2rem;
	`)}

	${MediaQueries.BREAK_POINT_470_PX(css`
		letter-spacing: 1.2rem;
		font-size: 1.8rem;
	`)}
`;

export const BigTitle = styled.h1`
	font-family: ${(p) => p.theme.fonts.zilla};
	font-size: 7rem;
	letter-spacing: 0.7rem;
	line-height: 1.2em;
	text-transform: uppercase;
	color: #fff;
	margin: 1rem 0;
	text-align: center;


	${MediaQueries.BREAK_POINT_820_PX(css`
		font-size: 5rem;
	`)}

	${MediaQueries.BREAK_POINT_650_PX(css`
		font-size: 4rem;
	`)}

	${MediaQueries.BREAK_POINT_470_PX(css`
		font-size: 2.5rem;
		margin: 2.5rem auto 5.5rem auto;
	`)}
`;

export const ShopButton = styled.button`
	cursor: pointer;
	border: none;
	width: 19rem;
	height: 6rem;
	background-color: #fff;
	transition: all 0.3s ease-out;
	font-family: ${(p) => p.theme.fonts.zilla};
	font-size: 1.6rem;
	text-transform: uppercase;

	&:hover {
		background-color: black;
		color: #fff;
	}
`;
