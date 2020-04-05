import React from 'react';

import { CollectionWrapper } from './collection.styles';

import CollectionItem, {
	CollectionItemType,
} from '../collection-item/collection-item';

const Collection: React.FC<{ items: CollectionItemType[] }> = (props) => {
	return (
		<CollectionWrapper>
			{props.items.map((item: CollectionItemType, i) => (
				<CollectionItem key={i} item={item} />
			))}
		</CollectionWrapper>
	);
};

export default Collection;
