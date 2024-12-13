import Modal from "@/components/Modal";
import { Input, TextArea } from "@/components";
import StatusBadge from "./StatusBadge";
import { Amount, Container, Label, Row } from "./HistoryModal.styled";

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
			<Input
				label="정정 사항 선택 *"
				value={correctionType}
				readOnly
				type="text"
			/>
			<TextArea label="정정 사유를 입력하세요 *" value={reason} readOnly />
		</Modal>
	);
};

export default HistoryModal;
