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

		saturday: "#3c54ed",
		sunday: "#f54e4e",

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
 * @example
 * import { useTheme } from 'styled-components';
 * const { theme } = useTheme();
 * const primaryColor = getThemeValue("colors", "primary")({ theme });
 */
export const getThemeValue =
	<T extends keyof DefaultTheme>(section: T, key: keyof DefaultTheme[T]) =>
	({ theme }: { theme: DefaultTheme }) =>
		theme[section][key];

/**
 * theme의 colors 부분 가져오는 함수
 * @param key "primary" | "secondaryDark" | "secondary" | "secondaryLight" | "danger" | "warning" | "orange" | "success" | "grayDark" | "gray" | "grayLight" | "grayWhite" | "white" | "saturday" | "sunday" | "dim" | "primary_hover" | "white_hover"
 * @returns ({ theme }: { theme: DefaultTheme }) => theme["colors"][key]
 *
 * @example
 * import { useTheme } from 'styled-components';
 * const { theme } = useTheme();
 * const primaryColor = getColor("primary")({ theme });
 *
 * // 템플릿 리터럴인 경우
 * const StyledDiv = styled.div`
 *		${getColor("primary")}
 * `;
 */
export const getColor = (key: keyof DefaultTheme["colors"]) =>
	getThemeValue("colors", key);

/**
 * theme의 fontSize 부분 가져오는 함수
 * @param key "xs": 12px | "sm": 14px | "md": 16px | "lg": 20px | "xl": 24px
 * @returns ({ theme }: { theme: DefaultTheme }) => theme["fontSize"][key]
 *
 * @example
 * // 템플릿 리터럴인 경우
 * const StyledDiv = styled.div`
 *		${getFontSize("md")}
 * `;
 */
export const getFontSize = (key: keyof DefaultTheme["fontSize"]) =>
	getThemeValue("fontSize", key);

/**
 * theme의 fontWeight 부분 가져오는 함수
 * @param key "light": 300 | "regular": 400 | "medium": 500 | "bold": 700
 * @returns ({ theme }: { theme: DefaultTheme }) => theme["fontWeight"][key]
 *
 * @example
 * // 템플릿 리터럴인 경우
 * const StyledDiv = styled.div`
 *		${getFontWeight("regular")}
 * `;
 */
export const getFontWeight = (key: keyof DefaultTheme["fontWeight"]) =>
	getThemeValue("fontWeight", key);

/**
 * theme의 breakpoints 부분 가져오는 함수
 * @param key key: "sm": 320px | "md": 768px | "lg": 992px | "xl": 1280px | "xxl": 1440px
 * @returns ({ theme }: { theme: DefaultTheme }) => theme["breakpoints"][key]
 *
 * @example
 * // 템플릿 리터럴인 경우
 * const StyledDiv = styled.div`
 *		\@media (min-width: ${getBreakPoints("lg")}) {
 *       	// ...
 *       }
 * `;
 */
export const getBreakPoints = (key: keyof DefaultTheme["breakpoints"]) =>
	getThemeValue("breakpoints", key);

/**
 * theme의 borderRadius 부분 가져오는 함수
 * @param key "sm": 6px | "md": 20px | "lg": 30px
 * @returns ({ theme }: { theme: DefaultTheme }) => theme["borderRadius"][key]
 *
 * @example
 * // 템플릿 리터럴인 경우
 * const StyledDiv = styled.div`
 *		${getBorderRadius("regular")}
 * `;
 */
export const getBorderRadius = (key: keyof DefaultTheme["borderRadius"]) =>
	getThemeValue("borderRadius", key);
