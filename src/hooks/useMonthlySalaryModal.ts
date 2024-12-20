import { useState, useEffect } from "react";
import { getYearlySalaryData } from "@/services";

interface UseMonthlySalaryModalProps {
	userId: string | null;
}

export const useMonthlySalaryModal = ({
	userId,
}: UseMonthlySalaryModalProps) => {
	const currentYear = new Date().getFullYear().toString();
	const [selectedYear, setSelectedYear] = useState(currentYear);
	const [yearlySalaryData, setYearlySalaryData] = useState<
		{ month: string; salary: number }[]
	>([]);

	const years = Array.from({ length: 5 }, (_, i) =>
		(Number(currentYear) - i).toString(),
	);

	useEffect(() => {
		if (userId && selectedYear) {
			fetchYearlySalaryData();
		}
	}, [userId, selectedYear]);

	const fetchYearlySalaryData = async () => {
		if (!userId) return;

		try {
			const data = await getYearlySalaryData(userId, parseInt(selectedYear));
			if (Array.isArray(data) && data.length > 0) {
				setYearlySalaryData(data);
			} else {
				setYearlySalaryData([]);
			}
		} catch {
			setYearlySalaryData([]);
		}
	};

	return {
		selectedYear,
		setSelectedYear,
		yearlySalaryData,
		years,
	};
};
