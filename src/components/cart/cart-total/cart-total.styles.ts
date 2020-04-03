import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const CartTotalWrapper = styled.div`
	width: 30rem;
	min-height: 35rem;
	margin-left: 1rem;
	background-color: #f9f9f9;
	padding: 2rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	font-family: ${p => p.theme.fonts.Poppins};
`;

export const Title = styled.h2`
	align-self: start;
	font-family: ${p => p.theme.fonts.zilla};
	font-size: 2rem;
	margin: 0;
	margin-bottom: 1.7rem;
	${(p: { gridArea?: FlattenSimpleInterpolation }) => p.gridArea};
`;

interface LineWrapperPropsType {
	light?: boolean;
}

export const LineWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-size: 1.4rem;
	font-weight: ${(p: LineWrapperPropsType) => (p.light ? '400' : '700')};
	color: #1a1a1a;
	text-transform: capitalize;

	& span:last-child {
		width: 30%;
		text-align: center;
	}
`;

export const Divider = styled.div`
	width: 100%;
	background-color: #c7c7c7;
	height: 0.1rem;
	${(p: { gridArea?: FlattenSimpleInterpolation }) => p.gridArea};
`;

export const Button = styled.button`
	width: 100%;
	height: 5rem;
	background-color: #000;
	color: #fff;
	border: none;
	font-family: inherit;
	font-size: inherit;
	margin-top: 2.5rem;
	cursor: pointer;
	backface-visibility: hidden;
	box-shadow: 3px 5px 8px 0px #a9a9a9;
	transition: all 0.3s ease;

	&:hover {
		box-shadow: unset;
		transform: scale(1.03);
	}
`;
