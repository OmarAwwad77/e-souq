import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Cart from '../../components/cart/cart';
import CartTotal from '../../components/cart/cart-total/cart-total';
import {
	PageContent,
	PageImage,
	PageTitle,
	PageWrapper,
} from './cart.page.styles';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import ReturnToShop from '../../components/return-to-shop/return-to-shop';
import { AppState } from '../../redux/root.reducer';

interface LinkStateProps {
	cartItemsCount: number;
}
interface OwnProps {}

type Props = OwnProps & LinkStateProps;

const CartPage: React.FC<Props> = ({ cartItemsCount }) => {
	return (
		<PageWrapper>
			<PageImage>
				<PageTitle>Cart</PageTitle>
			</PageImage>
			<PageContent>
				{cartItemsCount === 0 ? (
					<ReturnToShop />
				) : (
					<>
						<Cart />
						<CartTotal />
					</>
				)}
			</PageContent>
		</PageWrapper>
	);
};

const mapStateToProps = createStructuredSelector<
	AppState,
	OwnProps,
	LinkStateProps
>({
	cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartPage);
