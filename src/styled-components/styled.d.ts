import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		spacer: {
			XL: string;
			L: string;
			M: string;
			S: string;
		};
		fonts: {
			zilla: string;
		};
		centerElements: FlattenSimpleInterpolation;
	}
}
