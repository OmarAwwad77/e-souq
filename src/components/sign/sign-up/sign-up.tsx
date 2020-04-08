import React, { useState } from 'react';
import { css } from 'styled-components';

import { FormStateType } from '../../form/form.types';
import Form from '../../form/form';
import { Button, ButtonsWrapper, OuterWrapper } from '../sign.styles';

const signUpGridCss = css`
	width: 100%;
	gap: 1rem;
	grid-template-areas:
		'title title'
		'subTitle subTitle'
		'divider divider'
		'displayNameLabel displayNameLabel'
		'displayName displayName'
		'emailLabel emailLabel'
		'email email'
		'passwordLabel passwordLabel'
		'password password'
		'confirmPasswordLabel confirmPasswordLabel'
		'confirmPassword confirmPassword';
`;

const signUpFormInitialState: FormStateType = {
	titles: {
		title: 'I do not have a account',
		subTitle: 'Sign up with your email and password',
	},
	fields: [
		{
			type: 'text',
			label: 'displayName',
			displayLabel: 'display name',
			value: '',
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'email',
			value: '',
			validation: {
				required: true,
				type: 'email',
			},
		},
		{
			type: 'password',
			label: 'password',
			value: '',
			validation: {
				required: true,
				minLen: 6,
				maxLen: 12,
			},
		},
		{
			type: 'password',
			label: 'confirmPassword',
			displayLabel: 'confirm password',
			value: '',
			validation: {
				required: true,
				shouldMatch: 'password',
			},
		},
	],
	isFormValid: false,
};

const SignUp: React.FC = () => {
	const [signUpState, setSignUpState] = useState<FormStateType>(
		signUpFormInitialState
	);

	return (
		<OuterWrapper>
			<ButtonsWrapper>
				<Form
					setState={setSignUpState}
					state={signUpState}
					gridCss={signUpGridCss}
				/>
				<Button>Sign up</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

export default SignUp;
