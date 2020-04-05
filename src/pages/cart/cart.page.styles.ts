import styled from 'styled-components';

import cartImageUrl from '../../assets/cart-img-1.jpg';

export const PageWrapper = styled.section`
	margin: ${(p) => `${p.theme.spacer.M} 0`};
`;

export const PageTitle = styled.h1`
	${(p) => p.theme.mixins.h1};
	font-size: 4rem;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const PageImage = styled.div`
	position: relative;
	background: url(${cartImageUrl}) 35% center/cover no-repeat;
	width: 100%;
	padding-top: 30.25%;
`;

export const PageContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	margin: ${(p) => p.theme.spacer.M} ${(p) => p.theme.spacer.XS} 0;
`;
