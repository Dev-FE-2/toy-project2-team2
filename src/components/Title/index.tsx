import type { PageTitleProps } from "@/types";
import { StyledTitle } from "./Title.styled";

const Title = ({ title }: PageTitleProps) => {
	return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
