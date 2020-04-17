import React from 'react';
import { connect } from 'react-redux';
import { Link } from '../../nav-items/nav-items.styles';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal } from '../../../redux/cart/cart.selectors';
import { AppState } from '../../../redux/root.reducer';
import {
	CartTotalWrapper,
	LineWrapper,
	Title,
	Button,
	Divider,
} from './cart-total.styles';

interface OwnProps {}
interface StoreProps {
	total: number;
}

type Props = OwnProps & StoreProps;

const CartTotal: React.FC<Props> = ({ total }) => {
	return (
		<CartTotalWrapper>
			<Title>Cart totals</Title>
			<LineWrapper bold>
				<span>subtotal</span> <span>${total}</span>
			</LineWrapper>
			<LineWrapper bold>
				<span>Shipping</span>
				<span>
					<span style={{ fontWeight: 400 }}>flat rate:</span> $29.98
				</span>
			</LineWrapper>
			<Divider />
			<LineWrapper bold>
				<span>total</span> <span>${(total + 20).toFixed(2)}</span>
			</LineWrapper>
			<Link to='/checkout'>
				<Button>Proceed to checkout</Button>
			</Link>
		</CartTotalWrapper>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	StoreProps
>({
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CartTotal);
