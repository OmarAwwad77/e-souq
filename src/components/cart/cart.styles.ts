import styled from 'styled-components';

export const CartWrapper = styled.div`
	/* width: 60%; */
	min-width: 60rem;
	display: grid;
	grid-template-columns: 33rem repeat(3, max-content);
	grid-template-rows: auto;
	grid-auto-rows: auto;
	justify-items: center;
	align-items: center;
	gap: 4rem;
	font-family: ${(p) => p.theme.fonts.Poppins};
	font-size: 1.4rem;
	color: #3e3e3e;
`;

export const CartTitle = styled.span`
	text-transform: uppercase;
	font-size: 1.1rem;
	width: 100%;
	text-align: center;
	border-bottom: 1px solid #b5b3b3a6;
`;
