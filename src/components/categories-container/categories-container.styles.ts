import styled, { css } from 'styled-components';

export const CategoriesWrapper = styled.section`
	margin: ${props => props.theme.spacer.S} auto;
	display: grid;
	grid-template-columns: repeat(2, minmax(38rem, 67.5rem));
	grid-template-rows: repeat(2, auto);
	width: 90%;
`;

const before_and_after_css = css`
	position: absolute;
	content: '';
	width: 12px;
	height: 100%;
	transform: rotate(45deg);
	transition: all 0.4s ease-out;
`;

export const CategoryButton = styled.button`
	position: absolute;
	${p => p.theme.centerElements}
	color: #fff;
	text-transform: uppercase;
	font-size: 2rem;
	font-family: ${p => p.theme.fonts.zilla};
	width: 30rem;
	height: 5rem;
	border: 3px solid #fff;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.3s ease-out;

	&:before {
		content: '';
		position: absolute;
		${p => p.theme.centerElements}
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: 3px solid #fff;
		transition: all 0.3s ease-out;
	}
`;

export const CategoryContainer = styled.div`
	overflow: hidden;
	position: relative;

	&:hover ${CategoryButton} {
		background-color: #fff;
		color: black;
	}

	&:hover ${CategoryButton}:before {
		top: 75%;
		left: 57%;
	}
`;

export const Category = styled.div`
	background: url(${(p: { url: string }) => p.url}) center/cover no-repeat;
	padding-top: 60.25%;
	overflow: hidden;
	transition: transform 1s ease-out;
	&:after {
		${before_and_after_css}
		right: -19%;
		bottom: -17%;
		background-color: rgba(255, 255, 255, 0.75);
	}
	&:before {
		${before_and_after_css}
		right: -10%;
		bottom: -25%;
		background-color: rgba(255, 255, 255, 0.4);
	}

	${CategoryContainer}:hover & {
		transform: scale(1.05);
		background-image: linear-gradient(
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.2) 100%
			),
			url(${(p: { url: string }) => p.url});
	}
	${CategoryContainer}:hover &:after {
		right: 19%;
	}
	${CategoryContainer}:hover &:before {
		right: 10%;
	}
`;
