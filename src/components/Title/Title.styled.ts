import styled from "styled-components";
import { getBreakPoints, getFontSize, getFontWeight } from "@styles/theme";

export const StyledTitle = styled.h1`
	font-size: ${getFontSize("xl")};
	font-weight: ${getFontWeight("bold")};

	@media (max-width: ${getBreakPoints("md")}) {
		font-size: ${getFontSize("lg")};
	}
`;
