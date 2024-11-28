import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;

			secondaryDark: string;
			secondary: string;
			secondaryLight: string;

			danger: string;
			warning: string;
			orange: string;
			success: string;

			grayDark: string;
			gray: string;
			grayLight: string;
			grayWhite: string;

			white: string;

			dim: string;

			primary_hover: string;
			white_hover: string;
		};

		fontSize: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};

		fontWeight: {
			light: number;
			regular: number;
			medium: number;
			bold: number;
		};

		breakpoints: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
		borderRadius: {
			sm: string;
			md: string;
			lg: string;
		};
	}
}
