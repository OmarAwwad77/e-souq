import React from 'react';

import { PageWrapper, PageContent } from '../cart/cart.page.styles';
import {
	CartTotalWrapper as Order,
	Title,
	Divider,
	LineWrapper,
	Button
} from '../../components/cart/cart-total/cart-total.styles';
import { Header, BillingForm } from './checkout.page.styles';

const CheckoutPage = () => {
	return (
		<PageWrapper>
			<Header headerTitle='Checkout' />
			<PageContent>
				<BillingForm />
				<Order>
					<Title>Your Order</Title>
					<Divider />
					<LineWrapper light>
						<span>product</span>
						<span>subtotal</span>
					</LineWrapper>
					<Divider />
					<LineWrapper light>
						<span>
							Belt long jumpsuitfgfg{' '}
							<span style={{ fontWeight: 700 }}>× 1</span>
						</span>
						<span>$49.99</span>
					</LineWrapper>
					<Divider />
					<LineWrapper light>
						<span>subtotal</span>
						<span>$129.98</span>
					</LineWrapper>
					<Divider />
					<LineWrapper light>
						<span>shipping</span>
						<span>flat rate: $29.98</span>
					</LineWrapper>
					<Divider />
					<LineWrapper light>
						<span>total</span>
						<span style={{ fontWeight: 700 }}>$229.98</span>
					</LineWrapper>
					<Divider />
					<Button>Place Order</Button>
				</Order>
			</PageContent>
		</PageWrapper>
	);
};

export default CheckoutPage;
