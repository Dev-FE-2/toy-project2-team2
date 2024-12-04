import { Label, ListItem, Value } from "../Salay.styled";
import Dot from "@/assets/img/dot_icon.svg?react";

const DeductionItem = ({ label, value }: { label: string; value: string }) => {
	return (
		<ListItem>
			<Label>
				<Dot style={{ margin: "0 4px 3px 4px" }} />
				{label}
			</Label>
			<Value>{value}</Value>
		</ListItem>
	);
};

export default DeductionItem;
