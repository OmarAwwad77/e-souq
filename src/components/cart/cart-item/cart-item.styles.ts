import styled, { css } from 'styled-components';

import MediaQueries from '../../../media-queries';

export const CartItemProduct = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

export const ProductImgName = styled.div``;

export const Remove = styled.span`
	position: relative;
	display: inline-block;
	width: 2rem;
	height: 2rem;
	margin-right: ${(p) => p.theme.spacer.XS};
	cursor: pointer;

	&::after,
	&::before {
		content: '';
		position: absolute;
		height: 1.5rem;
		width: 0.1rem;
		background-color: #313030;
		top: 50%;
		left: 50%;
	}

	&::before {
		transform: translate(0, -50%) rotate(45deg);
	}
	&::after {
		transform: translate(0, -50%) rotate(-45deg);
	}

	${MediaQueries.BREAK_POINT_650_PX(css`
		margin-right: 1rem;
	`)}
`;

export const Image = styled.img`
	width: 7rem;
	height: auto;
	margin-right: ${(p) => p.theme.spacer.XS};

	${MediaQueries.BREAK_POINT_650_PX(css`
		margin-right: 1rem;
	`)}
`;

export const Name = styled.span`
	width: 20rem;

	${MediaQueries.BREAK_POINT_650_PX(css`
		width: 10rem;
	`)}

	${MediaQueries.BREAK_POINT_400_PX(css`
		position: absolute;
		left: 24%;
		top: 105%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	`)}
`;

export const Price = styled.span``;

const plusMinusStyles = css`
	position: absolute;
	font-size: 2rem;
	top: 50%;
	transform: translate(0, -50%);
	cursor: pointer;
`;

export const Plus = styled.span`
	${plusMinusStyles}
	left: 0;
	margin-right: 1rem;
`;

export const Minus = styled.span`
	${plusMinusStyles}
	right: 0;
	margin-left: 1rem;
`;

export const Quantity = styled.span`
	display: inline-block;
	position: relative;
	width: 100%;
	text-align: center;
`;

export const SubTotal = styled.span`
	font-weight: 700;
	color: #1a1a1a;
`;
