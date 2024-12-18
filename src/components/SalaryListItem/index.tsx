import Dot from "../Dot";

const SalaryListItem = ({
	label,
	value,
}: {
	label: string;
	value: string | number;
}) => (
	<div>
		<Dot />
		<span>{label}</span>
		<strong>{value}</strong>
	</div>
);

export default SalaryListItem;
