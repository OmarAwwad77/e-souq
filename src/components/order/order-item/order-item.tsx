import React from 'react';

import { LineWrapper, Divider } from '../../cart/cart-total/cart-total.styles';

interface OwnProps {
	name: string;
	quantity: number;
	total: number;
}

type Props = OwnProps;

const OrderItem: React.FC<Props> = ({ name, quantity, total }) => {
	return (
		<>
			<LineWrapper>
				<span>
					{name} <span style={{ fontWeight: 700 }}>× {quantity}</span>
				</span>
				<span>${total}</span>
			</LineWrapper>
			<Divider />
		</>
	);
};

export default OrderItem;
