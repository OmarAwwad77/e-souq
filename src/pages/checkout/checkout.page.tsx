import React, { useState } from 'react';
import { css } from 'styled-components';

import { countries } from './countries';
import { PageWrapper, PageContent } from '../cart/cart.page.styles';
import { Header } from './checkout.page.styles';
import Form from '../../components/form/form';
import { FormStateType } from '../../components/form/form.types';
import Order from '../../components/order/order';

const billingFormStyles = css`
	gap: 1rem;
	/* grid-template-rows: 5rem; */
	grid-template-areas:
		'title title'
		'divider divider'
		'firstNameLabel lastNameLabel'
		'firstName lastName'
		'countryLabel countryLabel'
		'country country'
		'streetAddressLabel streetAddressLabel'
		'streetAddress streetAddress'
		'cityLabel cityLabel'
		'city city'
		'stateLabel stateLabel'
		'state state'
		'zipLabel zipLabel'
		'zip zip'
		'phoneLabel phoneLabel'
		'phone phone'
		'emailLabel emailLabel'
		'email email';
`;

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
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'city',
			value: '',
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'state',
			displayLabel: 'state / county',
			value: '',
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'zip',
			displayLabel: 'postcode / ZIP',
			value: '',
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'phone',
			value: '',
			validation: {
				required: true,
				type: 'phoneNo',
				minLen: 5,
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

const CheckoutPage = () => {
	const [formState, setFormState] = useState<FormStateType>(formInitialState);

	return (
		<PageWrapper>
			<Header headerTitle='Checkout' />
			<PageContent>
				<Form
					state={formState}
					setState={setFormState}
					gridCss={billingFormStyles}
				/>
				<Order />
			</PageContent>
		</PageWrapper>
	);
};

export default CheckoutPage;
