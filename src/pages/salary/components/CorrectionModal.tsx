import { useEffect, useState } from "react";
import CustomSelect from "@/components/Select";
import Modal from "@/components/Modal";
import { TextArea } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { ErrorMessage } from "../Salay.styled";
import {
	getSalaryAmount,
	saveSalaryCorrection,
} from "@/services/SalaryService";

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
	const [selectedCorrection, setSelectedCorrection] = useState(
		correctionOptions[0].value,
	);
	const [reason, setReason] = useState("");
	const [error, setError] = useState(false);
	const uid = useSelector((state: RootState) => state.loginAuth.uid?.userId);
	console.log("UID:", uid);

	useEffect(() => {
		if (isOpen) {
			setSelectedCorrection(correctionOptions[0].value);
			setReason("");
			setError(false);
		}
	}, [isOpen]);
	const getSalaryId = () => {
		const year = selectedDate.getFullYear();
		const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
		return `salaries_${year}_${month}`;
	};

	const handleApply = async () => {
		if (!uid) {
			console.error("사용자 ID가 없습니다.");
			return;
		}

		if (!reason.trim()) {
			setError(true);
			console.error("정정 사유를 입력하세요.");
			return;
		}

		const salaryId = getSalaryId();
		try {
			setError(false);
			const amount = await getSalaryAmount(uid, salaryId);

			await saveSalaryCorrection({
				uid,
				salaryId,
				correctionData: {
					type: selectedCorrection,
					reason,
					amount,
					status: "검토 중",
				},
			});
			console.log("정정 요청이 성공적으로 저장되었습니다.");
			onClose();
		} catch (error) {
			console.error("정정 요청 저장 중 오류 발생:", error);
		}
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
