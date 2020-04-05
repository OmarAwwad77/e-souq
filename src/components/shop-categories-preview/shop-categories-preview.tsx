import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ShopCategory from '../shop-category/shop-category';
import { shopData } from '../../pages/shop/shop-data';

const ShopCategoriesPreview = (props: RouteComponentProps) => {
	return (
		<>
			<ShopCategory
				path={props.match.url}
				items={shopData.sneakers.slice(0, 4)}
				title='sneakers'
			/>
			<ShopCategory
				path={props.match.url}
				items={shopData.hats.slice(0, 4)}
				title='hats'
			/>
			<ShopCategory
				path={props.match.url}
				items={shopData.womens.slice(0, 4)}
				title='womens'
			/>
			<ShopCategory
				path={props.match.url}
				items={shopData.mens.slice(0, 4)}
				title='mens'
			/>
		</>
	);
};

export default ShopCategoriesPreview;
