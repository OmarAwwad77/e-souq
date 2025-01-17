import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyles from './GlobalStyles';
import { store } from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
