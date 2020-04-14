import {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from 'styled-components';

type Css = FlattenInterpolation<ThemeProps<DefaultTheme>>;

const breakPoints = {
	BREAK_POINT_885_PX: '885px',
	BREAK_POINT_820_PX: '820px',
	BREAK_POINT_720_PX: '720px',
	BREAK_POINT_650_PX: '650px',
	BREAK_POINT_470_PX: '470px',
	BREAK_POINT_400_PX: '400px',
};

type BreakPointsKeys = keyof typeof breakPoints;
type MediaQueryFun = (css: Css) => string;
type MediaQueries = {
	[key in BreakPointsKeys]: MediaQueryFun;
};
const keys = Object.keys(breakPoints) as BreakPointsKeys[];

export default keys.reduce<MediaQueries>((acc, key) => {
	acc[key] = (style) => `
     @media only screen and (max-width: ${breakPoints[key]}) {
       ${style};
     }
   `;
	return acc;
}, {} as any);

export const cannotHover: MediaQueryFun = (styles) => `
	@media (hover: none){
		${styles}
	}
`;

export const canHover: MediaQueryFun = (styles) => `
	@media (hover: hover){
		${styles}
	}
`;
