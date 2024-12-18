import styled from "styled-components";

export const EditingButton = styled.div<{ $isEditing: boolean }>`
	display: flex;
	button {
		width: 100%;
		margin: 10px 5px 0 0;
		padding: 13px 0;
	}
	button:first-child {
		display: ${(props) => (props.$isEditing ? "block" : "none")};
	}
`;
