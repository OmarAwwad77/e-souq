import React from 'react';

import Collection from '../collection/collection';
import { CollectionItem as CollectionItemType } from '../../redux/cart/cart.types';
import { CollectionTitle, Link } from './shop-category.styles';

interface OwnProps {
	title: string;
	items: CollectionItemType[];
	path?: string;
}

type Props = OwnProps;

const ShopCategory: React.FC<Props> = ({ items, title, path }) => {
	const TitleLink = path && <Link to={`${path}/${title}`}>{title}</Link>;
	return (
		<>
			<CollectionTitle>{path ? TitleLink : title}</CollectionTitle>
			<Collection items={items} />
		</>
	);
};

export default ShopCategory;
