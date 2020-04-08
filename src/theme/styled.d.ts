import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		spacer: {
			XL: string;
			L: string;
			M: string;
			S: string;
			XS: string;
		};
		fonts: {
			zilla: string;
			Poppins: string;
		};
		mixins: {
			centerElements: FlattenSimpleInterpolation;
			hoverable: FlattenSimpleInterpolation;
			h1: FlattenInterpolation;
		};
	}
}
