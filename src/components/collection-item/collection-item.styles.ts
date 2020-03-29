import styled from 'styled-components';

import { Button } from '../categories-container/categories-container.styles';

export const AddToCartButton = styled(Button)`
	opacity: 0;
	width: 70%;
	top: 70%;

	&:hover:before {
		top: 75%;
		left: 57%;
	}
`;

export const CollectionItemWrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover ${AddToCartButton} {
		opacity: 1;
		background-color: #fff;
		color: black;
	}
`;

export const ItemImage = styled.div`
	background: url(${(p: { url: string }) => p.url}) center/cover no-repeat;
	height: 93%;
	width: 30rem;
	${CollectionItemWrapper}:hover & {
		opacity: 0.8;
	}
`;

export const ItemInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 7%;
`;
