import React from 'react';

import Collection from '../collection/collection';
import CollectionItemType from '../../redux/cart/types/CollectionItem';
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
