import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import MediaQueries from '../../../media-queries';

export const CartTotalWrapper = styled.div`
	width: 33rem;
	min-height: 35rem;
	margin-left: 1rem;
	background-color: #f9f9f9;
	padding: 2rem;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	font-family: ${(p) => p.theme.fonts.Poppins};

	${MediaQueries.BREAK_POINT_885_PX(css`
		margin-left: 0;
	`)}
`;

type TitleProps = {
	gridArea?: FlattenSimpleInterpolation;
	fontSize?: string;
	// noMarginBottom?: boolean;
};

export const Title = styled.h2<TitleProps>`
	align-self: start;
	font-family: ${(p) => p.theme.fonts.zilla};
	font-size: ${(p) => (p.fontSize ? p.fontSize : '2rem')};
	margin: 0;
	${(p) => p.gridArea};
`;
/* margin-bottom: ${p => (p.noMarginBottom ? '0' : '1.7rem')}; */
interface LineWrapperPropsType {
	bold?: boolean;
}

export const LineWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-size: 1.4rem;
	font-weight: ${(p: LineWrapperPropsType) => (p.bold ? '700' : '400')};
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
	transition: all 0.3s ease;
	text-transform: uppercase;

	${(p: { disabled?: boolean }) =>
		p.disabled
			? css`
					opacity: 0.4;
					cursor: not-allowed;
			  `
			: css`
					&:hover {
						box-shadow: 3px 5px 8px 0px #a9a9a9;
						transform: scale(1.03);
					}
			  `}
`;
