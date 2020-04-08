import React from 'react';
import styled from 'styled-components';

import {
	PageContent as RawPageContent,
	PageWrapper,
} from '../cart/cart.page.styles';
import SignIn from '../../components/sign/sign-in/sign-in';
import SignUp from '../../components/sign/sign-up/sign-up';

const FlexChild = styled.div`
	width: 50%;
	min-width: 43rem;
`;
const PageContent = styled(RawPageContent)`
	margin-top: 4rem;
`;

const Sign = () => {
	return (
		<PageWrapper>
			<PageContent>
				<FlexChild>
					<SignIn />
				</FlexChild>
				<FlexChild>
					<SignUp />
				</FlexChild>
			</PageContent>
		</PageWrapper>
	);
};

export default Sign;
