import React from 'react';
import styled from 'styled-components';

import Header from '../header/header';
import Footer from '../footer/footer';

const AppLayout = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: minmax(calc(100vh - 16rem), auto) 16rem;
	grid-template-areas:
		'content'
		'footer';
	overflow: hidden;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = props => {
	return (
		<AppLayout>
			<Header />
			{props.children}
			<Footer />
		</AppLayout>
	);
};

export default layout;
