import { useState } from "react";
import CustomSelect from "@/components/common/Select";
import Modal from "@/components/common/Modal";
import { TextArea } from "@/components/common";

const CorrectionRequestModal = ({ isOpen, onClose }: any) => {
	const correctionOptions = [
		{ value: "지급 내역", label: "지급 내역" },
		{ value: "공제 내역", label: "공제 내역" },
		{ value: "근무 시간", label: "근무 시간" },
		{ value: "기타", label: "기타" },
	];
	const [selectedCorrection, setSelectedCorrection] = useState(
		correctionOptions[0].value,
	);
	const handleApply = () => {
		console.log("정정 신청 요청");
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			title="정정신청"
			onClose={onClose}
			confirmLabel="신청"
			onConfirm={handleApply}
		>
			<CustomSelect
				label="정정 사항 선택 * "
				options={correctionOptions}
				value={selectedCorrection}
				onChange={(value) => setSelectedCorrection(value)}
			/>
			<TextArea label="정정 사유를 입력하세요 *" />
		</Modal>
	);
};

export default CorrectionRequestModal;
