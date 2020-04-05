import React from 'react';
import styled from 'styled-components';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import { shopData } from '../shop/shop-data';
import ShopCategoriesPreview from '../../components/shop-categories-preview/shop-categories-preview';
import ShopCategory from '../../components/shop-category/shop-category';

const ShopWrapper = styled.section`
	margin: ${(p) => `${p.theme.spacer.M} ${p.theme.spacer.XS}`};
	text-align: center;
`;

const ShopPage = (props: RouteComponentProps) => {
	const currentUrl = props.match.url;
	return (
		<ShopWrapper>
			<Switch>
				<Route
					path={`${currentUrl!}/:category`}
					render={(p) => {
						const category = p.match.params['category'];
						let component: any = (
							<ShopCategoriesPreview
								match={props.match}
								location={props.location}
								history={props.history}
							/>
						);

						if (['sneakers', 'hats', 'womens', 'mens'].includes(category!)) {
							component = (
								<ShopCategory title={category!} items={shopData[category!]} />
							);
						}

						return component;
					}}
				/>
				<Route path='/shop' component={ShopCategoriesPreview} />
			</Switch>
		</ShopWrapper>
	);
};

export default ShopPage;
