import StatusBadge from "./components/StatusBadge";
import { Select } from "@/components";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import { useState, useEffect } from "react";
import { StyledTitle } from "@/components/Title/Title.styled";
import HistoryModal from "./components/HistoryModal";
import {
	CardContainer,
	Header,
	Card,
	CardLeft,
	Month,
	CardRight,
	Arrow,
	DateTime,
	NoDataMessage,
	NoDataWrapper,
} from "./salary-correction.styled";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import type { CorrectionData } from "./types/correctionData";
import { toast } from "react-toastify";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";

enum Status {
	Pending = "검토중",
	Rejected = "반려",
	Confirmed = "확인완료",
}

const SalaryCorrectionPage = () => {
	const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
	const [selectedData, setSelectedData] = useState<CorrectionData | null>(null);
	const [salaryData, setSalaryData] = useState<CorrectionData[]>([]);
	const [selectedYear, setSelectedYear] = useState("2024");
	const [isLoading, setIsLoading] = useState(true);

	const uid = useSelector((state: RootState) => state.loginAuth.uid);

	const fetchSalaryCorrections = async (year: string) => {
		if (!uid) return;

		setIsLoading(true);

		try {
			const basePath = `user/${uid}/salaries`;
			const salaryDocs = await getDocs(collection(db, basePath));

			const corrections: CorrectionData[] = [];

			for (const salaryDoc of salaryDocs.docs) {
				const [_, docYear, docMonth] = salaryDoc.id.split("_");
				if (docYear !== year) continue;

				const salaryMonth = `${docYear}년 ${parseInt(docMonth, 10)}월`;
				const correctionPath = `${basePath}/${salaryDoc.id}/salaryCorrection`;

				const correctionSnapshots = await getDocs(
					collection(db, correctionPath),
				);

				correctionSnapshots.forEach((correctionDoc) => {
					const correctionData = {
						...correctionDoc.data(),
						month: salaryMonth,
						date: correctionDoc.data().date,
					} as CorrectionData;

					corrections.push(correctionData);
				});
			}

			const sortedCorrections = corrections.sort((a, b) => {
				const extractMonth = (monthString: string) => {
					const match = monthString.match(/(\d+)월/);
					return match ? parseInt(match[1]) : 0;
				};

				return extractMonth(b.month) - extractMonth(a.month);
			});

			setSalaryData(sortedCorrections);
		} catch (error) {
			toast.error("정정 내역 데이터를 불러오는데 실패했습니다.");
			setSalaryData([]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchSalaryCorrections(selectedYear);
	}, [uid, selectedYear]);

	const yearOptions = [
		{ value: "2024", label: "2024" },
		{ value: "2023", label: "2023" },
		{ value: "2022", label: "2022" },
		{ value: "2021", label: "2021" },
		{ value: "2020", label: "2020" },
	];

	return (
		<>
			<Header>
				<StyledTitle>급여 정정 신청 내역</StyledTitle>
				<Select
					width="150px"
					options={yearOptions}
					value={selectedYear}
					onChange={(value) => setSelectedYear(value)}
				/>
			</Header>
			<LoaderWrapper isLoading={isLoading}>
				<CardContainer>
					{salaryData.length > 0 ? (
						salaryData.map((item, index) => (
							<Card
								key={index}
								onClick={() => {
									setSelectedData({
										...item,
										history:
											item.status === Status.Rejected ||
											item.status === Status.Confirmed
												? item.history
												: "",
									});
									setHistoryModalOpen(true);
								}}
							>
								<CardLeft>
									<StatusBadge status={item.status} />
									<Month>{item.month} 정정 내역</Month>
								</CardLeft>
								<CardRight>
									<DateTime>
										{new Date(item.date).toLocaleDateString("ko-KR", {
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
										})}
									</DateTime>

									<Arrow>
										<LeftArrow
											width="12"
											height="12"
											style={{ transform: "rotate(180deg)" }}
										/>
									</Arrow>
								</CardRight>
							</Card>
						))
					) : (
						<NoDataWrapper>
							<NoDataMessage>
								해당 년도의 정정 신청 내역 데이터가 없습니다.
							</NoDataMessage>
						</NoDataWrapper>
					)}

					{selectedData && (
						<HistoryModal
							isOpen={isHistoryModalOpen}
							onClose={() => setHistoryModalOpen(false)}
							status={selectedData.status}
							history={selectedData.history}
							correctionType={selectedData.correctionType}
							reason={selectedData.reason}
						/>
					)}
				</CardContainer>
			</LoaderWrapper>
		</>
	);
};

export default SalaryCorrectionPage;
