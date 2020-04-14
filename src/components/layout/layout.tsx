import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../header/header';
import Footer from '../footer/footer';
import SideBar from '../side-bar/side-bar';

const AppLayout = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: minmax(calc(100vh - 16rem), auto) 16rem;
	grid-template-areas:
		'content'
		'footer';
	/* overflow: hidden; */
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	const [showSideBar, setShowSideBar] = useState<boolean>(false);

	return (
		<AppLayout>
			<Header toggleSideBar={setShowSideBar} />
			<SideBar
				closeSideBar={() => {
					setShowSideBar(false);
				}}
				show={showSideBar}
			/>
			{props.children}
			<Footer />
		</AppLayout>
	);
};

export default Layout;
