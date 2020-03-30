import styled from 'styled-components';

export const Header = styled.header`
	position: relative;
	height: 14rem;
	background-color: #2c2c2c;

	&:before {
		content: '${(p: { headerTitle: string }) => p.headerTitle}';
		position: absolute;
		${p => p.theme.mixins.centerElements};
		font-family: ${p => p.theme.fonts.zilla};
		font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
		color: #fff;
	}
`;

export const BillingForm = styled.div`
	width: 60%;
	height: 50rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	grid-auto-rows: auto;
	background-color: #eee;
`;
