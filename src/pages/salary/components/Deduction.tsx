import Dot from "@/components/Dot";
import { Label, ListItem, Value } from "../Salay.styled";

const DeductionItem = ({ label, value }: { label: string; value: string }) => {
	return (
		<ListItem>
			<Label>
				<Dot />
				{label}
			</Label>
			<Value>{value}</Value>
		</ListItem>
	);
};

export default DeductionItem;
