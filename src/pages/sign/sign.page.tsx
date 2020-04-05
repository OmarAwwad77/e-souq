import React, { useState, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

import Form from '../../components/form/form';
import {
	PageContent as RawPageContent,
	PageWrapper,
} from '../cart/cart.page.styles';
import { FormStateType } from '../../components/form/form.types';
import { Button as RawButton } from '../../components/cart/cart-total/cart-total.styles';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';

interface SignUpInPropsType {
	formState: FormStateType;
	setFormState: Dispatch<SetStateAction<FormStateType>>;
}

const FlexChild = styled.div`
	width: 50%;
	min-width: 43rem;
`;

const PageContent = styled(RawPageContent)`
	margin-top: 4rem;
`;

const Button = styled(RawButton)`
	height: unset;
	padding: 1.5rem 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${(p) => p.theme.fonts.Poppins};
	font-size: 1.6rem;

	&:last-child {
		margin-top: 1rem;
	}
`;

const signInGridCss = css`
	width: 100%;
	gap: 1rem;
	grid-template-areas:
		'title title'
		'subTitle subTitle'
		'divider divider'
		'emailLabel emailLabel'
		'email email'
		'passwordLabel passwordLabel'
		'password password';
`;

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

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const OuterWrapper = styled.div`
	width: 38rem;
	margin: 0 auto;
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

const SignUp: React.FC<SignUpInPropsType> = ({ formState, setFormState }) => {
	return (
		<OuterWrapper>
			<ButtonsWrapper>
				<Form
					setState={setFormState}
					state={formState}
					gridCss={signUpGridCss}
				/>
				<Button>Sign up</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

const SignIn: React.FC<SignUpInPropsType> = ({ formState, setFormState }) => {
	return (
		<OuterWrapper>
			<Form state={formState} gridCss={signInGridCss} setState={setFormState} />
			<ButtonsWrapper>
				<Button>Sign in</Button>
				<Button>
					Sign in with &nbsp; <GoogleIcon />
				</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

const signInFormInitialState: FormStateType = {
	titles: {
		title: 'I already have an account',
		subTitle: 'Sign in with your email and password',
	},
	fields: [
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
	],
	isFormValid: false,
};

const Sign = () => {
	const [signInState, setSignInState] = useState<FormStateType>(
		signInFormInitialState
	);

	const [signUpState, setSignUpState] = useState<FormStateType>(
		signUpFormInitialState
	);

	return (
		<PageWrapper>
			<PageContent>
				<FlexChild>
					<SignIn setFormState={setSignInState} formState={signInState} />
				</FlexChild>
				<FlexChild>
					<SignUp setFormState={setSignUpState} formState={signUpState} />
				</FlexChild>
			</PageContent>
		</PageWrapper>
	);
};

export default Sign;
