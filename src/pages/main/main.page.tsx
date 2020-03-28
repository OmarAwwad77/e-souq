import React from 'react';

import Slider from '../../components/slider/slider';
import CategoriesContainer from '../../components/categories-container/categories-container';
import ShopWithUs from '../../components/shop-with-us/shop-with-us';
import { MainWrapper } from './main.page.styles';

const main = () => {
	return (
		<MainWrapper>
			<Slider />
			<CategoriesContainer />
			<ShopWithUs />
		</MainWrapper>
	);
};

export default main;
