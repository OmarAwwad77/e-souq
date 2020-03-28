import { DefaultTheme, css } from 'styled-components';

const centerElements = css`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const theme: DefaultTheme = {
	spacer: {
		XL: '20rem',
		L: '15rem',
		M: '10rem',
		S: '5rem'
	},
	fonts: {
		zilla: `'Zilla Slab', serif;`
	},
	centerElements: centerElements
};

export default theme;
