import { InputContainer, Label } from "@/components/Input/Input.style";
import { getColor } from "@/styles/theme";
import styled from "styled-components";

const DetailInputContainer = styled(InputContainer)`
	padding: 20px 10px;
	gap: 14px;
`;

const DetailLabel = styled(Label)`
	display: block;
`;

const FieldValue = styled.div<{ $isBr?: boolean }>`
	text-align: left;

	${(props) => props.$isBr && "white-space: pre-wrap"}
`;

const ColorField = styled.div<{ $color: string }>`
	width: 30px;
	height: 30px;
	background-color: ${(props) => props.$color};
	border-radius: 50%;
	border: 1px solid ${getColor("grayLight")};
`;

export { DetailInputContainer, DetailLabel, FieldValue, ColorField };
