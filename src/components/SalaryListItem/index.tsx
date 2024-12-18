import { Label, ListItem, Value } from "@/pages/salary/Salay.styled";
import Dot from "../Dot";

const SalaryListItem = ({
	label,
	value,
}: {
	label: string;
	value: string | number;
}) => (
	<ListItem>
		<Label>
			<Dot />
			{label}
		</Label>
		<Value>{value}</Value>
	</ListItem>
);

export default SalaryListItem;
