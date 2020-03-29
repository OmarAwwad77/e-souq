import React from 'react';
import styled from 'styled-components';

import Slider from '../../components/slider/slider';
import CategoriesContainer from '../../components/categories-container/categories-container';
import ShopWithUs from '../../components/shop-with-us/shop-with-us';

export const MainWrapper = styled.div`
	grid-area: content;
`;

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
