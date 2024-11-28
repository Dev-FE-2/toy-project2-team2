import { DefaultTheme } from "styled-components";

// Styled-Components 테마 정의
export const theme: DefaultTheme = {
	colors: {
		primary: "#029688",

		secondaryDark: "#212B36",
		secondary: "#637381",
		secondaryLight: "#DFE4EA",

		danger: "#E10E0E",
		warning: "#FBBF24",
		orange: "#F27430",
		success: "#22AD5C",

		grayDark: "#6B7280",
		gray: "#9CA3AF",
		grayLight: "#E5E7EB",
		grayWhite: "#F3F4F6",

		white: "#FFFFFF",

		dim: "rgba(0,0,0,0.7)",

		primary_hover: "#027056",
		white_hover: "#F3F4F6",
	},

	fontSize: {
		xs: "12px",
		sm: "14px",
		md: "16px",
		lg: "20px",
		xl: "24px",
	},

	fontWeight: {
		light: 300,
		regular: 400,
		medium: 500,
		bold: 700,
	},

	breakpoints: {
		sm: "320px",
		md: "768px",
		lg: "992px",
		xl: "1280px",
		xxl: "1440px",
	},

	borderRadius: {
		sm: "6px",
		md: "20px",
		lg: "30px",
	},
};

/**
 * @param section 테마 속성의 분류 (e.g. colors, breakpoints...)
 * @param key 분류 안에 key 값 (e.g. color -> primary)
 * @returns 테마의 값을 반환하는 함수
 *
 * 아래와 같이 사용 가능
 * const primaryColor = getThemeValue("colors", "primary");
 */
export const getThemeValue =
	<T extends keyof DefaultTheme>(section: T, key: keyof DefaultTheme[T]) =>
	({ theme }: { theme: DefaultTheme }) =>
		theme[section][key];

// theme의 colors 부분 가져오는 함수
export const getColor = (key: keyof DefaultTheme["colors"]) =>
	getThemeValue("colors", key);

// theme의 fontSize 부분 가져오는 함수
export const getFontSize = (key: keyof DefaultTheme["fontSize"]) =>
	getThemeValue("fontSize", key);

// theme의 fontWeight 부분 가져오는 함수
export const getFontWeight = (key: keyof DefaultTheme["fontWeight"]) =>
	getThemeValue("fontWeight", key);

// theme의 breakpoints 부분 가져오는 함수
export const getBreakPoints = (key: keyof DefaultTheme["breakpoints"]) =>
	getThemeValue("breakpoints", key);

// theme의 borderRadius 부분 가져오는 함수
export const getBorderRadius = (key: keyof DefaultTheme["borderRadius"]) =>
	getThemeValue("borderRadius", key);
