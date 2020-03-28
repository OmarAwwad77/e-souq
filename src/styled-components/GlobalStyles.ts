import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	
	*{
		box-sizing: border-box;
	}

	html{
		font-size: 62.5%;
	}

	body{
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 1.6rem;
	}
`;

export default GlobalStyles;
