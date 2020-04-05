import styled from 'styled-components';

export { Link } from '../header/header.styles';

export const CollectionTitle = styled.h1`
	${(p) => p.theme.mixins.h1};
	margin-bottom: ${(p) => p.theme.spacer.S};
	${(p) => p.theme.mixins.hoverable}
`;
