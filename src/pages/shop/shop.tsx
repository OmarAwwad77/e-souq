import React from 'react';
import styled from 'styled-components';

import Collection from '../../components/collection/collection';

import * as shopData from './shop-data';

const ShopWrapper = styled.section`
	margin: ${p => `${p.theme.spacer.M} ${p.theme.spacer.XS}`};
	text-align: center;
`;

const CollectionTitle = styled.h1`
	${p => p.theme.mixins.h1};
	margin-bottom: ${p => p.theme.spacer.S};
	${p => p.theme.mixins.hoverable}
`;

const shop = () => {
	return (
		<ShopWrapper>
			<CollectionTitle>sneakers</CollectionTitle>
			<Collection items={shopData.sneakers} />

			<CollectionTitle>hats</CollectionTitle>
			<Collection items={shopData.hats} />

			<CollectionTitle>womens</CollectionTitle>
			<Collection items={shopData.womens} />

			<CollectionTitle>mens</CollectionTitle>
			<Collection items={shopData.mens} />
		</ShopWrapper>
	);
};

export default shop;
