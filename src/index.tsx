import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';

import theme from './styled-components/theme';
import GlobalStyles from './styled-components/GlobalStyles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
