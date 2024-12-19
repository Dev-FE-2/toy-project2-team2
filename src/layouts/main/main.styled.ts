import { getBreakPoints } from "@/styles/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	min-height: 100vh;
`;

export const Main = styled.main`
	padding: 92px 0 30px;
	width: 100%;

	@media (max-width: ${getBreakPoints("md")}) {
		padding-top: 45px;
	}
`;

export const MainContainer = styled.div`
	width: 100%;
	max-width: 1260px;
	padding: 20px 30px;
	margin: 0 auto;
	box-sizing: border-box;
	overflow: hidden;

	@media (max-width: ${getBreakPoints("md")}) {
		padding: 20px;
	}
`;
