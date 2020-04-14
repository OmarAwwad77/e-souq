import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import {
	PageContent as RawPageContent,
	PageWrapper,
} from '../cart/cart.page.styles';
import SignIn from '../../components/sign/sign-in/sign-in';
import SignUp from '../../components/sign/sign-up/sign-up';
import MediaQueries from '../../media-queries';

const FlexChild = styled.div`
	width: 50%;
	min-width: 31rem;
	max-width: 40rem;
	&:first-child {
		margin-right: 3rem;
		margin-bottom: ${(p) => p.theme.spacer.S};
	}

	${MediaQueries.BREAK_POINT_650_PX(css`
		&:first-child {
			margin-right: 0;
		}
	`)}
`;
const PageContent = styled(RawPageContent)`
	margin-top: 4rem;
`;

const Sign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
