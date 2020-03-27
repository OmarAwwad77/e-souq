import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
