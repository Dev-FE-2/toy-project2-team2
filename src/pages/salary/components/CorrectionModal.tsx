import CustomSelect from "@/components/Select";
import Modal from "@/components/Modal";
import { TextArea } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { ErrorMessage } from "../Salay.styled";
import { useCorrectionModal } from "@/hooks/useCorrectionModal";

const CorrectionModal = ({
	isOpen,
	onClose,
	selectedDate,
}: {
	isOpen: boolean;
	onClose: () => void;
	selectedDate: Date;
}) => {
	const correctionOptions = [
		{ value: "지급 내역", label: "지급 내역" },
		{ value: "공제 내역", label: "공제 내역" },
		{ value: "근무 시간", label: "근무 시간" },
		{ value: "기타", label: "기타" },
	];
	const uid = useSelector((state: RootState) => state.loginAuth.uid);
	const {
		selectedCorrection,
		setSelectedCorrection,
		reason,
		setReason,
		error,
		handleApply,
		setError,
	} = useCorrectionModal({
		uid,
		selectedDate,
		onClose,
	});

	return (
		<Modal
			isOpen={isOpen}
			title="정정신청"
			onClose={onClose}
			buttons={[
				{
					label: "취소",
					onClick: onClose,
					buttonType: "white",
					size: "small",
				},
				{
					label: "신청",
					onClick: handleApply,
					size: "small",
					buttonType: "primary",
				},
			]}
		>
			<CustomSelect
				label="정정 사항 선택 * "
				options={correctionOptions}
				value={selectedCorrection}
				onChange={(value) => setSelectedCorrection(value)}
			/>
			<TextArea
				label="정정 사유를 입력하세요 *"
				value={reason}
				onChange={(e) => {
					setReason(e.target.value);
					if (error) setError(false);
				}}
			/>
			{error && <ErrorMessage>정정 사유를 입력하세요.</ErrorMessage>}
		</Modal>
	);
};

export default CorrectionModal;
