import React from 'react';

import {
	CollectionItemWrapper,
	ItemImage,
	ItemInfoWrapper,
	AddToCartButton
} from './collection-item.styles';

export interface ItemType {
	url: string;
	name: string;
	price: number;
}

interface CollectionItemPropsType {
	item: ItemType;
}

const CollectionItem: React.FC<CollectionItemPropsType> = props => {
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
