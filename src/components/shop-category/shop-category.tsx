import React from 'react';

import Collection from '../collection/collection';
import { CollectionItemType } from '../collection-item/collection-item';
import { CollectionTitle, Link } from './shop-category.styles';

interface ShopCategoryPropsType {
	title: string;
	items: CollectionItemType[];
	path?: string;
}

const ShopCategory: React.FC<ShopCategoryPropsType> = ({
	items,
	title,
	path,
}) => {
	const TitleLink = path && <Link to={`${path}/${title}`}>{title}</Link>;
	return (
		<>
			<CollectionTitle>{path ? TitleLink : title}</CollectionTitle>
			<Collection items={items} />
		</>
	);
};

export default ShopCategory;
