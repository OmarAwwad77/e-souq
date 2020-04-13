import {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from 'styled-components';

type Css = FlattenInterpolation<ThemeProps<DefaultTheme>>;

const breakPoints = {
	BREAK_POINT_820_PX: '820px',
	BREAK_POINT_650_PX: '650px',
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
     @media (max-width: ${breakPoints[key]}) {
       ${style};
     }
   `;
	return acc;
}, {} as any);
