import React from 'react';
import { connect } from 'react-redux';

import {
	CollectionItemWrapper,
	ItemImage,
	ItemInfoWrapper,
	AddToCartButton,
} from './collection-item.styles';

import CollectionItemType from '../../redux/cart/types/CollectionItem';
import { addCartItem, StoreActions } from '../../redux/store.actions';
import { Dispatch } from 'redux';

type OwnProps = {
	item: CollectionItemType;
};

type StoreProps = {
	addCartItem: typeof addCartItem;
};
type Props = OwnProps & StoreProps;

const CollectionItem: React.FC<Props> = ({ item, addCartItem }) => {
	return (
		<CollectionItemWrapper>
			<ItemImage url={item.url} />
			<AddToCartButton onClick={() => addCartItem(item)}>
				add to cart
			</AddToCartButton>
			<ItemInfoWrapper>
				<span>{item.name}</span>
				<span>{item.price}$</span>
			</ItemInfoWrapper>
		</CollectionItemWrapper>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<StoreActions>) => ({
	addCartItem: (item: CollectionItemType) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
