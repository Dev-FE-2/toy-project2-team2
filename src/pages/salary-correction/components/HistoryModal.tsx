import Modal from "@/components/Modal";
import StatusBadge from "./StatusBadge";
import { Amount, Container, Label, Reason, Row } from "./HistoryModal.styled";

const HistoryModal = ({
	isOpen,
	onClose,
	status,
	correctionType,
	reason,
	history,
}: any) => {
	return (
		<Modal
			isOpen={isOpen}
			title="정정 신청 내역"
			onClose={onClose}
			buttons={[
				{
					label: "닫기",
					onClick: onClose,
					buttonType: "white",
				},
			]}
		>
			<Container>
				<Label>정정 내역</Label>
				<Row>
					<Amount>
						{typeof history === "number"
							? history.toLocaleString("en-US")
							: history}
					</Amount>
					<StatusBadge status={status} />
				</Row>
			</Container>
			<Container>
				<Label>정정 사항 선택</Label>
				<Row>
					<Amount>{correctionType}</Amount>
				</Row>
			</Container>
			<Container>
				<Label>정정 사유</Label>
				<Row>
					<Reason>{reason}</Reason>
				</Row>
			</Container>
		</Modal>
	);
};

export default HistoryModal;
