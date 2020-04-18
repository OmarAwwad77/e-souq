import React, { useState } from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { FormStateType } from '../../form/form.types';
import Form from '../../form/form';
import { Button, ButtonsWrapper, OuterWrapper } from '../sign.styles';
import { Dispatch } from 'redux';
import { StoreActions, signUp, clearError } from '../../../redux/root.actions';
import { Credentials, UserError } from '../../../redux/user/user.types';
import {
	selectSignUpError,
	selectLoading,
} from '../../../redux/user/user.selectors';
import { AppState } from '../../../redux/root.reducer';
import Spinner from '../../spinner/spinner';
import withUnknownError from '../../with-error/with-unknown-error';

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
			isValid: false,
			value: '',
			validation: {
				required: true,
			},
		},
		{
			type: 'text',
			label: 'email',
			value: '',
			isValid: false,
			validation: {
				required: true,
				type: 'email',
			},
		},
		{
			type: 'password',
			label: 'password',
			value: '',
			isValid: false,
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
			isValid: false,
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
	clearError: typeof clearError;
}

interface LinkStateProps {
	error: UserError | null;
	loading: boolean;
}

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

const SignUp: React.FC<Props> = ({ signUp, error, loading }) => {
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
			<Form
				setState={setSignUpState}
				state={signUpState}
				gridCss={signUpGridCss}
				fieldNetworkError={error && error.label !== 'unknown' ? error : null}
			/>
			<ButtonsWrapper>
				{loading ? (
					<div style={{ width: '7rem', height: '7rem' }}>
						<Spinner />
					</div>
				) : (
					<Button onClick={signUpHandler}>Sign up</Button>
				)}
			</ButtonsWrapper>
		</OuterWrapper>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	error: selectSignUpError,
	loading: selectLoading,
});

const mapDispatchToProps = (
	dispatch: Dispatch<StoreActions>
): LinkDispatchProps => ({
	signUp: (credentials: Credentials) => dispatch(signUp(credentials)),
	clearError: () => dispatch(clearError()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withUnknownError(SignUp));
