import { getFontWeight } from "@/styles/theme";
import styled from "styled-components";

interface BadgeProps {
	status: string;
}
const StatusBadge = ({ status }: BadgeProps) => {
	return <Badge $status={status}>{status}</Badge>;
};

export default StatusBadge;

const Badge = styled.span<{ $status: string }>`
	display: inline-block;
	padding: 5px 10px;
	font-size: 14px;
	font-weight: ${getFontWeight("medium")};
	border-radius: 20px;
	margin-bottom: 8px;
	text-align: center;
	width: 80px;
	align-items: center;
	color: ${(props) => {
		switch (props.$status) {
			case "확인완료":
				return "#1A8245";
			case "검토중":
				return "#F59E0B";
			case "반려":
				return "#E10E0E";
			default:
				return "#fff";
		}
	}};
	background-color: ${(props) => {
		switch (props.$status) {
			case "확인완료":
				return "#DAF8E6";
			case "검토중":
				return "#FEF3C7";
			case "반려":
				return "#FEEBEB";
			default:
				return "gray";
		}
	}};
`;
