import styled from 'styled-components';

export const CartItemProduct = styled.div`
	display: flex;
	align-items: center;
`;

export const Remove = styled.span`
	position: relative;
	display: inline-block;
	width: 2rem;
	height: 2rem;
	margin-right: ${p => p.theme.spacer.XS};
	&::after,
	&::before {
		content: '';
		position: absolute;
		height: 1.5rem;
		width: 0.1rem;
		background-color: #313030;
		top: 50%;
		left: 50%;
	}

	&::before {
		transform: translate(0, -50%) rotate(45deg);
	}
	&::after {
		transform: translate(0, -50%) rotate(-45deg);
	}

	cursor: pointer;
`;

export const Image = styled.img`
	width: 7rem;
	height: auto;
	margin-right: ${p => p.theme.spacer.XS};
`;

export const Name = styled.span`
	width: 20rem;
`;

export const Quantity = styled.span`
	display: inline-block;
	position: relative;
	&:before {
		content: '\\2212';
		cursor: pointer;
		margin-right: 1rem;
	}

	&:after {
		content: '\\002B';
		cursor: pointer;
		margin-left: 1rem;
	}
`;

export const Price = styled.span`
	font-weight: 700;
	color: #1a1a1a;
`;
