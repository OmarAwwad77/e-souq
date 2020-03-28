import styled, { keyframes, css } from 'styled-components';

import { ReactComponent as LeftArrowIcon } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/right-arrow.svg';
import img1 from '../../assets/slider1.jpg';
import img2 from '../../assets/slider2.jpg';

export type AnimType = 'in' | 'out' | 'none';

interface ImageProps {
	image: string;
	default?: boolean;
	fade?: AnimType;
}

interface ArrowBoxProps {
	isLeft: boolean;
}

export const images = [img1, img2];
export const imagesText = [
	`GENTLE 
  PALETTE`,
	`VINTAGE
  STYLE`
];

const scaleImageInAnim = keyframes`
	0%{
		transform: perspective(5px) translate3d(0px, 0px, 0px);
	}
	100%{
		transform: perspective(5px) translate3d(-35px, 2px, .5px);
	}
`;

const scaleImageOutAnim = keyframes`
	0%{
		transform: perspective(5px) translate3d(-35px, 2px, .5px);
	}
	100%{
		transform: perspective(5px) translate3d(0px, 0px, 0px);
	}
`;
const fadeOutImageAnim = keyframes`
	from{
		opacity: 1;
	}
	to{
		opacity: 0;
	}
`;

const fadeInImageAnim = keyframes`
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;

export const SliderWrapper = styled.div`
	z-index: 1;
	position: relative;
	width: 100%;
	height: 95vh;
	min-height: 50rem;
	overflow: hidden;
`;

export const ArrowBox = styled.div`
	z-index: 1;
	position: absolute;
	top: 50%;
	${(p: ArrowBoxProps) =>
		p.isLeft
			? css`
					left: 0;
			  `
			: css`
					right: 0;
			  `}
	transform: translate(0, -50%);
	background-color: black;
	height: 7rem;
	width: 3rem;
	transition: width 0.4s ease-out;
	&:hover {
		width: 5rem;
	}
`;

const ArrowCss = css`
	width: 3rem;
	height: 3rem;
	fill: #fff;
	position: absolute;
	top: 35px;
	transform: translate(0, -50%);
	cursor: pointer;
`;

export const LeftArrow = styled(LeftArrowIcon)`
	${ArrowCss}
	left: 15px;
`;

export const RightArrow = styled(RightArrowIcon)`
	${ArrowCss}
	right: 15px;
`;

export const Image = styled.div`
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position-x: center;
	background-repeat: no-repeat;
	animation: ${(p: ImageProps) => {
		if (p.fade === 'in') {
			return css`
					${scaleImageInAnim} 5s ease forwards ,${fadeInImageAnim} 2s  ease forwards
				`;
		} else if (p.fade === 'out') {
			return css`
				${scaleImageOutAnim} 5s ease forwards,${fadeOutImageAnim} 2s  ease forwards
			`;
		} else {
			return '';
		}
	}};
	background-image: url(${(p: ImageProps) => p.image});
`;

export const SliderText = styled.div`
	font-size: 7.5rem;
	font-family: 'Roboto';
	font-weight: 500;
	letter-spacing: 5px;
	white-space: pre;
	position: absolute;
	bottom: 35%;
	left: 10%;
`;
