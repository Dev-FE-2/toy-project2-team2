import styled from "styled-components";
import { getColor } from "@/styles/theme";

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const Button = styled.div`
	cursor: pointer;
	display: inline-block;
	padding: 10px 15px;
	background-color: ${getColor("grayWhite")};
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: 4px;
`;

export const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	background-color: ${getColor("white")};
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: 4px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	padding: 10px;
	margin-top: 5px;
	z-index: 10;
`;

export const Row = styled.div`
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const SelectBox = styled.select`
	padding: 5px;
	border: 1px solid ${getColor("secondaryLight")};
	border-radius: 4px;
	width: 100px;
`;
