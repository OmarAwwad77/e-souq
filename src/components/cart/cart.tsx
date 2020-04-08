import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { AppState } from '../../redux/root.reducer';
import { CartItem as CartItemType } from '../../redux/cart/cart.types';
import { CartWrapper, CartTitle } from './cart.styles';
import CartItem from './cart-item/cart-item';

interface StoreProps {
	cartItems: CartItemType[];
}

type Props = StoreProps;

const Cart: React.FC<Props> = ({ cartItems }) => {
	return (
		<CartWrapper>
			<CartTitle>product</CartTitle>
			<CartTitle>price</CartTitle>
			<CartTitle>quantity</CartTitle>
			<CartTitle>subTotal</CartTitle>
			{cartItems.map((item: CartItemType) => (
				<CartItem
					key={item.id}
					id={item.id}
					name={item.name}
					url={item.url}
					price={item.price}
					quantity={item.quantity}
					total={item.total}
				/>
			))}
		</CartWrapper>
	);
};

const mapStateToProps = createStructuredSelector<AppState, {}, StoreProps>({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Cart);
