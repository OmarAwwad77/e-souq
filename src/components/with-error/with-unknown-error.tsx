import React from 'react';
import styled from 'styled-components';

export const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.25);
`;

export const Model = styled.div`
	position: absolute;
	z-index: 4;
	${(p) => p.theme.mixins.centerElements}
	max-width: 45rem;
	min-width: 31rem;
	height: 32rem;
	background-color: #fff;
	border-radius: 1rem;
	overflow: hidden;
`;

const ErrorTitle = styled.h2`
	height: 10rem;
	background-color: #000;
	text-align: center;
	color: #fff;
	margin: 0;
	padding-top: 3rem;
`;

const ErrorMessage = styled.p`
	text-transform: capitalize;
	font-size: 2.5rem;
	text-align: center;
	margin-top: 8rem;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	font-family: ${(p) => p.theme.fonts.zilla};
`;

const withUnknownError = (Component: React.FC<any>) => {
	return ({ error, clearError, ...theRest }: any) => {
		let content = <Component {...theRest} error={error} />;
		if (error && error.label === 'unknown') {
			content = (
				<>
					<Backdrop onClick={clearError}>
						<Model>
							<ErrorTitle>NetWork Error</ErrorTitle>
							<ErrorMessage>{error.message}</ErrorMessage>
						</Model>
					</Backdrop>
					<Component {...theRest} />
				</>
			);
		}
		return content;
	};
};

export default withUnknownError;
