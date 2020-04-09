import React, { useState } from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components';

import { FormStateType } from '../../form/form.types';
import Form from '../../form/form';
import { Button, ButtonsWrapper, OuterWrapper } from '../sign.styles';
import { Dispatch } from 'redux';
import { StoreActions, signUp } from '../../../redux/root.actions';
import { Credentials } from '../../../redux/user/user.types';

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

interface OwnProps {}
interface LinkDispatchProps {
	signUp: typeof signUp;
}

type Props = OwnProps & LinkDispatchProps;

const SignUp: React.FC<Props> = ({ signUp }) => {
	const [signUpState, setSignUpState] = useState<FormStateType>(
		signUpFormInitialState
	);

	const signUpHandler = () => {
		const {
			fields: [displayNameObj, emailObj, passwordObj],
			isFormValid,
		} = signUpState;

		if (isFormValid) {
			const displayName = displayNameObj.value as string;
			const email = emailObj.value as string;
			const password = passwordObj.value as string;

			signUp({ email, password, displayName });
		}
	};

	return (
		<OuterWrapper>
			<ButtonsWrapper>
				<Form
					setState={setSignUpState}
					state={signUpState}
					gridCss={signUpGridCss}
				/>
				<Button onClick={signUpHandler}>Sign up</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

const mapDispatchToProps = (
	dispatch: Dispatch<StoreActions>
): LinkDispatchProps => ({
	signUp: (credentials: Credentials) => dispatch(signUp(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
