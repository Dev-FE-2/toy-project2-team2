import { getBreakPoints } from "@/styles/theme";
import styled from "styled-components";

export const ScheduleWrapper = styled.div`
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

export const ScheduleContainer = styled.div`
	width: 100%;
	max-width: 1500px;
	padding: 20px 30px 0;
	margin: 0 auto;
	overflow: hidden;

	@media (max-width: ${getBreakPoints("md")}) {
		padding: 20px 20px 0;
	}
`;
