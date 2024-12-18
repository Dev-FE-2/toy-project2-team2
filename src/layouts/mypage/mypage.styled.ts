import { getBreakPoints } from "@/styles/theme";
import styled from "styled-components";

export const MypageWrapper = styled.div`
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

export const MypageContainer = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 10px 30px;
	margin: 55px auto 0;
	overflow: hidden;

	@media (max-width: ${getBreakPoints("md")}) {
		padding: 10px 20px;
		margin-top: 35px;
	}
`;