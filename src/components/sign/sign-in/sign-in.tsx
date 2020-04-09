import React, { useState } from 'react';
import { css } from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../../redux/root.reducer';

import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import Form from '../../form/form';
import { FormStateType } from '../../form/form.types';
import { Button, ButtonsWrapper, OuterWrapper } from '../sign.styles';
import {
	StoreActions,
	googleSignIn,
	emailSignIn,
} from '../../../redux/root.actions';
import { selectUser } from '../../../redux/user/user.selectors';
import { User, Credentials } from '../../../redux/user/user.types';

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

interface OwnProps {}

interface LinkStateProps {
	user: User | null;
}

interface LinkDispatchProps {
	googleSignIn: typeof googleSignIn;
	emailSignIn: typeof emailSignIn;
}

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

const SignIn: React.FC<Props> = ({ googleSignIn, emailSignIn, user }) => {
	const [signInState, setSignInState] = useState<FormStateType>(
		signInFormInitialState
	);

	const emailSignInHandler = () => {
		const {
			fields: [{ value: emailValue }, { value: passwordValue }],
			isFormValid,
		} = signInState;

		if (isFormValid) {
			emailSignIn({
				email: emailValue as string,
				password: passwordValue as string,
			});
		}
	};

	return (
		<OuterWrapper>
			{user && <Redirect to='/' />}
			<Form
				state={signInState}
				gridCss={signInGridCss}
				setState={setSignInState}
			/>
			<ButtonsWrapper>
				<Button onClick={emailSignInHandler}>Sign in</Button>
				<Button onClick={googleSignIn}>
					Sign in with &nbsp; <GoogleIcon />
				</Button>
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<StoreActions>) => ({
	googleSignIn: () => dispatch(googleSignIn()),
	emailSignIn: (credentials: Credentials) => dispatch(emailSignIn(credentials)),
});

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
