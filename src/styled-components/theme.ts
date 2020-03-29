import { DefaultTheme, css } from 'styled-components';

const centerElements = css`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const hoverable = css`
	display: inline-block;
	position: relative;
	cursor: pointer;
	&::after {
		content: '';
		position: absolute;
		top: 100%;
		right: 0%;
		background-color: black;
		height: 1px;
		width: 0%;
		transition: width 0.3s ease-in-out;
	}

	&:hover:after {
		left: 0%;
		width: 100%;
	}
`;

const h1 = css`
	font-family: ${p => p.theme.fonts.zilla};
	text-transform: capitalize;
	font-weight: 400;
	font-size: 2.8rem;
`;

const theme: DefaultTheme = {
	spacer: {
		XL: '20rem',
		L: '15rem',
		M: '10rem',
		S: '5rem',
		XS: '2rem'
	},
	fonts: {
		zilla: `'Zilla Slab', serif;`
	},
	mixins: {
		hoverable,
		centerElements,
		h1
	}
};

export default theme;
