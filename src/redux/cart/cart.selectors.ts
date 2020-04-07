import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';

export const selectCartItems = (state: AppState) => state.cart;

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
	items.reduce((acc, item) => item.quantity + acc, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
	items.reduce((acc, item) => item.total + acc, 0)
);
