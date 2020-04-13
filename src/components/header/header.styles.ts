import styled, {
	css,
	keyframes,
	FlattenSimpleInterpolation,
} from 'styled-components';

interface StyledHeaderProps {
	sticky: boolean;
}

const stickyAnimIn = keyframes`
    from {
        position: absolute;
        background-color: transparent;
        opacity:0;
        height: 0;
    }

    to{
        position: fixed;
        background-color: #fff;
        opacity: 1;
        height: 6rem;
    }
`;

const stickyAnimOut = keyframes`
	from{
        position: fixed;
        background-color: #fff;
    }

	to{
		position: absolute;
        background-color: transparent;
	}
`;

const positionStyles = (sticky: boolean): FlattenSimpleInterpolation => {
	return sticky
		? css`
				animation: ${stickyAnimIn} 0.3s ease-out forwards;
		  `
		: css`
				animation: ${stickyAnimOut} 0.3s ease-out forwards;
		  `;
};

export const HeaderWrapper = styled.header`
	z-index: 2;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	padding: 0 ${(p) => p.theme.spacer.XS};
	${(p: StyledHeaderProps) => positionStyles(p.sticky)};
	box-shadow: 0px 1px 13px
		${(p: StyledHeaderProps) => (p.sticky ? 'lightgray' : 'transparent')};
`;
