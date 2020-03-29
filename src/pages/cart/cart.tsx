import React from 'react';
import styled from 'styled-components';

import cartImageUrl from '../../assets/cart-img-1.jpg';

export const PageWrapper = styled.section`
	margin: ${p => `${p.theme.spacer.M} 0`};
`;

export const PageTitle = styled.h1`
	${p => p.theme.mixins.h1};
	font-size: 4rem;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const PageImage = styled.div`
	position: relative;
	background: url(${cartImageUrl}) 35% center/cover no-repeat;
	width: 100vw;
	padding-top: 30.25%;
`;

export const Cart = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: 1fr repeat(3, max-content);
	grid-template-rows: auto;
	grid-auto-rows: auto;
	justify-items: center;
	gap: 2rem 3rem;
	margin-top: ${p => p.theme.spacer.M};
`;

const cart: React.FC = () => {
	return (
		<PageWrapper>
			<PageImage>
				<PageTitle>Cart</PageTitle>
			</PageImage>
			<Cart>
				<span>productnewnewne</span>
				<span>price</span>
				<span>quantity</span>
				<span>total</span>
				<span>totsfsdfsdfsdfsdfsdfsdfsdal</span>
			</Cart>
		</PageWrapper>
	);
};

export default cart;
