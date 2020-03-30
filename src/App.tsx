import React from 'react';

import Layout from './components/layout/layout';
import Main from './pages/main/main.page';
import Shop from './pages/shop/shop.page';
import Cart from './pages/cart/cart.page';
import Checkout from './pages/checkout/checkout.page';

function App() {
	return (
		<Layout>
			<Checkout />
		</Layout>
	);
}

export default App;
