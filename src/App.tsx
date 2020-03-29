import React from 'react';

import Layout from './components/layout/layout';
import Main from './pages/main/main.page';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';

function App() {
	return (
		<Layout>
			<Cart />
		</Layout>
	);
}

export default App;
