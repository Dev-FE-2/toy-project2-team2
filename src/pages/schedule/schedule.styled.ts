import { flexCenter } from "@/styles";
import { getColor } from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 10px;

	& > section:first-child {
		flex-basis: 75%;
	}

	& > section:last-child {
		flex-basis: 25%;
	}
`;

const InsertBtn = styled.button`
	position: absolute;
	bottom: 15px;
	right: 15px;
	z-index: 1;
	width: 65px;
	height: 65px;
	${flexCenter}
	background-color: ${getColor("primary")};
	border-radius: 50%;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: ${getColor("primary_hover")};
	}
`;

export { Container, InsertBtn };
