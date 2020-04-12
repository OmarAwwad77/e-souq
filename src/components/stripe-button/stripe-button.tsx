import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import logo from '../../assets/logo.svg';
import { Button } from '../cart/cart-total/cart-total.styles';

interface OwnProps {
	price: number;
	canOrder: boolean;
}
type Props = OwnProps;
// #155724
const StripeCheckoutButton: React.FC<Props> = ({ price, canOrder }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_E123a2hI61gZLFTAJhSvCtcQ003OVQAASk';

	const onToken = (token: Token) => {
		alert('Payment Succesful!');
		console.log(token);
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='e-souq Ltd.'
			billingAddress
			shippingAddress
			image={logo}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			ComponentClass='div'
		>
			<Button disabled={!canOrder} style={{ marginTop: '0' }}>
				Place Order
			</Button>
		</StripeCheckout>
	);
};

export default StripeCheckoutButton;
