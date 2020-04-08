import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
