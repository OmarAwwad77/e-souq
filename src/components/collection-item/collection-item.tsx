import React from 'react';

import {
	CollectionItemWrapper,
	ItemImage,
	ItemInfoWrapper,
	AddToCartButton,
} from './collection-item.styles';

export interface CollectionItemType {
	name: string;
	price: number;
	url: string;
}

interface CollectionItemPropsType {
	item: CollectionItemType;
}

const CollectionItem: React.FC<CollectionItemPropsType> = (props) => {
	return (
		<CollectionItemWrapper>
			<ItemImage url={props.item.url} />
			<AddToCartButton>add to cart</AddToCartButton>
			<ItemInfoWrapper>
				<span>{props.item.name}</span>
				<span>{props.item.price}$</span>
			</ItemInfoWrapper>
		</CollectionItemWrapper>
	);
};

export default CollectionItem;
