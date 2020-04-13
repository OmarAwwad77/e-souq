import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

import MediaQueries from '../../media-queries';

const Lines = styled.span`
	display: none;
	position: relative;
	width: 18px;
	height: 16px;
	cursor: pointer;

	${MediaQueries.BREAK_POINT_650_PX(css`
		display: block;
	`)}
`;

const lineStyles = css`
	position: absolute;
	right: 0;
	height: 2px;
	width: 100%;
	background-color: #000;
	border-radius: 12px;
	transition: width 0.3s ease;
`;

const Line1 = styled.span`
	${lineStyles}
	top: 0;
	width: 11px;
`;
const Line2 = styled.span`
	${lineStyles}
	top: 7px;
	width: 13px;
`;
const Line3 = styled.span`
	${lineStyles}
	bottom: 0;
`;

interface OwnProps {
	toggleSideBar: Dispatch<SetStateAction<boolean>>;
}
type Props = OwnProps;
const MenuIcon: React.FC<Props> = ({ toggleSideBar }) => {
	return (
		<Lines onClick={() => toggleSideBar((prevState) => !prevState)}>
			<Line1 />
			<Line2 />
			<Line3 />
		</Lines>
	);
};

export default MenuIcon;
