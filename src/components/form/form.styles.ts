import styled, { css } from 'styled-components';
import SelectRaw from 'react-select';
import { GridCss } from './form.types';
export {
	Title,
	Divider
} from '../../components/cart/cart-total/cart-total.styles';

export const titleGridArea = css`
	grid-area: title;
`;

export const dividerGridArea = css`
	grid-area: divider;
`;

export const FormWrapper = styled.form`
	width: 60%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	grid-auto-rows: auto;
	${(p: { css: GridCss }) => p.css}
`;

export const Label = styled.label`
	grid-area: ${(p: { gridArea: string }) => p.gridArea};
	color: #3e3e3e;
	text-transform: capitalize;
`;

export const Required = styled.abbr.attrs(p => ({
	title: 'required'
}))`
	cursor: help;
	margin-left: 0.6rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: ${(p: { gridArea: string }) => p.gridArea};
`;

export const Input = styled.input`
	position: relative;
	outline: none;
	padding: 1rem;
	border: 1px solid #eee;
	font-size: inherit;
	font-family: inherit;
	transition: all 0.2s ease-out;

	&:focus,
	&:hover {
		border-color: #9c9999;
	}
`;

export const InputError = styled.span`
	height: 1rem;
	color: red;
	font-size: 1rem;
	text-transform: capitalize;
`;

export const Select = styled(SelectRaw)`
	grid-area: ${(p: { gridArea: string }) => p.gridArea};

	.react-select__control {
		border-radius: 0;
		border-color: #eee;
		height: 5rem;
		box-shadow: none;

		&--is-focused,
		&:hover {
			border-color: #9c9999;
			outline: none;
			cursor: pointer;
		}
	}

	.react-select__value {
		outline: none;
	}

	.react-select__option:hover {
		cursor: pointer;
	}
`;
