import { getBorderRadius, getBreakPoints, getColor } from "@/styles/theme";
import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${getColor("grayLight")};
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Card = styled.button`
	font-family: inherit;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	border: 1px solid ${getColor("grayLight")};
	border-radius: ${getBorderRadius("lg")};
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	background-color: ${getColor("white")};
`;

export const CardLeft = styled.div`
	display: flex;
	flex-direction: row;
	gap: 60px;
	align-items: center;
`;

export const Month = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: ${getColor("secondaryDark")};
`;

export const CardRight = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;

	@media (max-width: ${getBreakPoints("md")}) {
		display: none;
	}
`;

export const DateTime = styled.div`
	font-size: 18px;
	color: ${getColor("grayDark")};
`;

export const Arrow = styled.div`
	font-size: 16px;
	color: ${getColor("grayDark")};
`;
export const NoDataMessage = styled.p`
	margin: 0;
	padding: 0;
	text-align: center;
	z-index: 1;
`;
export const NoDataWrapper = styled.div`
	margin-bottom: 140px;
	text-align: center;
`;
