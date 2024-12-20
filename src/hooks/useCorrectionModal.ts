import { useState, useEffect } from "react";
import { getSalaryAmount, saveSalaryCorrection } from "@/services";
import { toast } from "react-toastify";

interface UseCorrectionModalProps {
	uid: string | null;
	selectedDate: Date;
	onClose: () => void;
}

export const useCorrectionModal = ({
	uid,
	selectedDate,
	onClose,
}: UseCorrectionModalProps) => {
	const [selectedCorrection, setSelectedCorrection] = useState("지급 내역");
	const [reason, setReason] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		setSelectedCorrection("지급 내역");
		setReason("");
		setError(false);
	}, [selectedDate]);

	const getSalaryId = () => {
		const year = selectedDate.getFullYear();
		const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
		return `salaries_${year}_${month}`;
	};

	const handleApply = async () => {
		if (!uid) {
			toast.error("사용자 정보를 확인할 수 없습니다.");
			return;
		}

		if (!reason.trim()) {
			setError(true);
			return;
		}

		const salaryId = getSalaryId();
		try {
			setError(false);
			const history = await getSalaryAmount(uid, salaryId);

			await saveSalaryCorrection({
				uid,
				salaryId,
				correctionData: {
					correctionType: selectedCorrection,
					reason,
					history,
					status: "검토중",
					date: new Date().toISOString(),
				},
			});

			toast.success("정정 신청이 완료되었습니다.");
			onClose();
		} catch {
			toast.error("정정 신청이 실패했습니다.");
		}
	};

	return {
		selectedCorrection,
		setSelectedCorrection,
		reason,
		setReason,
		error,
		handleApply,
		setError,
	};
};
