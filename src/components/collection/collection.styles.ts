import styled from 'styled-components';

export const CollectionWrapper = styled.section`
	display: grid;
	max-width: 131rem;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-template-rows: 37rem;
	grid-auto-rows: 37rem;
	gap: ${p => p.theme.spacer.S} 0;
	justify-content: center;
	justify-items: center;
	align-items: center;
	margin-bottom: ${p => p.theme.spacer.S};
`;
