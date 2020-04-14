import styled, { css } from 'styled-components';

import MediaQueries from '../../media-queries';

export const CartWrapper = styled.div`
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
	margin-bottom: ${(p) => p.theme.spacer.S};

	${MediaQueries.BREAK_POINT_650_PX(css`
		min-width: unset;
		margin-left: auto;
		margin-right: auto;
		gap: 3.5rem 1rem;
		grid-template-columns: repeat(4, max-content);
	`)};
`;

export const CartTitle = styled.span`
	text-transform: uppercase;
	font-size: 1.1rem;
	width: 100%;
	text-align: center;
	border-bottom: 1px solid #b5b3b3a6;
`;
