import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { countries } from './countries';
import { PageWrapper, PageContent } from '../cart/cart.page.styles';
import {
	Header,
	billingFormStyles,
	BillingFormWrapper,
} from './checkout.page.styles';
import Form from '../../components/form/form';
import { FormStateType } from '../../components/form/form.types';
import Order from '../../components/order/order';
import {
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { AppState } from '../../redux/root.reducer';
import { CartItem } from '../../redux/cart/cart.types';
import ReturnToShop from '../../components/return-to-shop/return-to-shop';

const formInitialState: FormStateType = {
	titles: {
		title: 'Billing details',
	},
	fields: [
		{
			type: 'text',
			label: 'firstName',
			displayLabel: 'first name',
			value: '',
			isValid: false,
			validation: {
				required: true,
				type: 'text',
			},
		},
		{
			type: 'text',
			label: 'lastName',
			displayLabel: 'last name',
			value: '',
			isValid: false,
			validation: {
				required: true,
				type: 'text',
			},
		},
		{
			type: 'select',
			label: 'country',
			options: countries,
			value: countries[0],
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'streetAddress',
			displayLabel: 'street address',
			value: '',
			isValid: false,
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'city',
			value: '',
			isValid: false,
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'state',
			displayLabel: 'state / county',
			value: '',
			isValid: false,
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'zip',
			displayLabel: 'postcode / ZIP',
			value: '',
			isValid: false,
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'phone',
			value: '',
			isValid: false,
			validation: {
				required: true,
				type: 'phoneNo',
			},
		},
		{
			type: 'text',
			label: 'email',
			value: '',
			validation: {
				type: 'email',
			},
		},
	],
	isFormValid: false,
};

interface LinkStateProps {
	cartItemsCount: number;
	cartItems: CartItem[];
	cartTotal: number;
}
interface OwnProps {}

type Props = OwnProps & LinkStateProps;

const CheckoutPage: React.FC<Props> = ({
	cartItems,
	cartItemsCount,
	cartTotal,
}) => {
	const [formState, setFormState] = useState<FormStateType>(formInitialState);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<PageWrapper>
			<Header headerTitle='Checkout' />
			<PageContent>
				{cartItemsCount === 0 ? (
					<ReturnToShop />
				) : (
					<>
						<BillingFormWrapper>
							<Form
								state={formState}
								setState={setFormState}
								gridCss={billingFormStyles}
							/>
						</BillingFormWrapper>
						<Order
							cartItems={cartItems}
							cartTotal={cartTotal}
							flatRate={29.98}
							canOrder={formState.isFormValid}
						/>
					</>
				)}
			</PageContent>
		</PageWrapper>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	cartItemsCount: selectCartItemsCount,
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
