import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../redux/root.reducer';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as CardIcon } from '../../assets/cart.svg';

// styles
type IconProps = {
	width?: string;
	height?: string;
};
const CartIconContainer = styled.li<IconProps>`
	position: relative;
	width: ${(p) => (p.width ? p.width : '2.5rem')};
	height: ${(p) => (p.height ? p.height : '2.5rem')};
	cursor: pointer;
`;
const CartItemsNumber = styled.span`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.2rem;
`;

interface OwnProps {
	width?: string;
	height?: string;
}
interface StoreProps {
	itemsCount: number;
}
type Props = StoreProps & OwnProps;

const CartIcon: React.FC<Props> = ({ itemsCount, width, height }) => {
	return (
		<CartIconContainer width={width} height={height}>
			<CardIcon />
			<CartItemsNumber>{itemsCount}</CartItemsNumber>
		</CartIconContainer>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	StoreProps
>({
	itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
