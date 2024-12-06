import { Badge } from "./StatusBadge.styled";

interface BadgeProps {
	status: string;
}
const StatusBadge = ({ status }: BadgeProps) => {
	return <Badge $status={status}>{status}</Badge>;
};

export default StatusBadge;
