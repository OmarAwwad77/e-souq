import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../../redux/user/user.selectors';
import { User } from '../../../redux/user/user.types';
import { AppState } from '../../../redux/root.reducer';
import { Dispatch } from 'redux';
import { StoreActions, signOut } from '../../../redux/root.actions';

interface OwnProps {}
interface LinkDispatchProps {
	signOut: typeof signOut;
}
interface LinkStateProps {
	user: User | null;
}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

const SignOut: React.FC<Props> = ({ user, signOut }) => {
	useEffect(() => {
		signOut();
	}, [signOut]);

	return user === null ? <Redirect to='/' /> : null;
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	user: selectUser,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions>) => ({
	signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
