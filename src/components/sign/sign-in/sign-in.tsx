import React, { useState } from 'react';
import { css } from 'styled-components';

import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import Form from '../../form/form';
import { FormStateType } from '../../form/form.types';
import { Button, ButtonsWrapper, OuterWrapper } from '../sign.styles';
import { googleProvider, auth } from '../../../firebase/firebase.utils';

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

const SignIn: React.FC = () => {
	const [signInState, setSignInState] = useState<FormStateType>(
		signInFormInitialState
	);

	const googleSignIn = async () => {
		const { user } = await auth.signInWithPopup(googleProvider);
		console.log(user);
	};

	return (
		<OuterWrapper>
			<Form
				state={signInState}
				gridCss={signInGridCss}
				setState={setSignInState}
			/>
			<ButtonsWrapper>
				<Button>Sign in</Button>
				<Button onClick={googleSignIn}>
					Sign in with &nbsp; <GoogleIcon />
				</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

export default SignIn;
