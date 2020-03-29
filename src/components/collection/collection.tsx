import React from 'react';

import { CollectionWrapper } from './collection.styles';

import CollectionItem, { ItemType } from '../collection-item/collection-item';

const Collection: React.FC<{ items: ItemType[] }> = props => {
	return (
		<CollectionWrapper>
			{props.items.map((item: ItemType, i) => (
				<CollectionItem key={i} item={item} />
			))}
		</CollectionWrapper>
	);
};

export default Collection;
