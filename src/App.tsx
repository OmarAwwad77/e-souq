import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout';
import Main from './pages/main/main.page';
import Shop from './pages/shop/shop.page';
import Cart from './pages/cart/cart.page';
import Checkout from './pages/checkout/checkout.page';
import Sign from './pages/sign/sign.page';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/cart' component={Cart} />
				<Route path='/checkout' component={Checkout} />
				<Route path='/shop' component={Shop} />
				<Route path='/sign' component={Sign} />
				<Route path='/' component={Main} />
			</Switch>
		</Layout>
	);
}

export default App;
