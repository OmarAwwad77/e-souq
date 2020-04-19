import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout';
import Main from './pages/main/main.page';
import Shop from './pages/shop/shop.page';
import Cart from './pages/cart/cart.page';
import Checkout from './pages/checkout/checkout.page';
import Sign from './pages/sign/sign.page';
import SignOut from './components/sign/sign-out/sign-out';
import { StoreActions, getCurrentUser } from './redux/root.actions';

interface LinkDispatchProps {
	getCurrentUser: typeof getCurrentUser;
}
interface OwnProps {}

type Props = OwnProps & LinkDispatchProps;

const App: React.FC<Props> = ({ getCurrentUser }) => {
	useEffect(() => {
		getCurrentUser();
	}, []);

	return (
		<Layout>
			<Switch>
				<Route path='/cart' component={Cart} />
				<Route path='/checkout' component={Checkout} />
				<Route path='/shop' component={Shop} />
				<Route path='/sign' component={Sign} />
				<Route path='/sign-out' component={SignOut} />
				<Route path='/' component={Main} />
			</Switch>
		</Layout>
	);
};

const mapDispatchToProps = (
	dispatch: Dispatch<StoreActions>
): LinkDispatchProps => ({
	getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
