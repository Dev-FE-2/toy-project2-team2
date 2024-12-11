import StatusBadge from "./components/StatusBadge";
import { Select } from "@/components";
import LeftArrow from "@/assets/img/left_arrow_icon.svg?react";
import { useState, useEffect } from "react";
import { StyledTitle } from "@/components/Title/Title.styled";
import CorrectionRequestModaled from "./components/HistoryModal";
import {
	CardContainer,
	Header,
	Card,
	CardLeft,
	Month,
	CardRight,
	Arrow,
	DateTime,
} from "./salary-correction.styled";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

interface CorrectionData {
	month: string;
	date: string;
	status: string;
	amount: string;
	correctionType: string;
	reason: string;
}

const SalaryCorrectionPage: React.FC = () => {
	const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
	const [selectedData, setSelectedData] = useState<CorrectionData | null>(null);
	const [salaryData, setSalaryData] = useState<CorrectionData[]>([]);

	const fetchSalaryCorrections = async () => {
		try {
			const userRef = collection(
				db,
				"user",
				"ol7Am3QUxLe8Lm9b4N05UcPUvmJ3",
				"salaries",
			);
			const salarySnapshots = await getDocs(userRef);

			const corrections: CorrectionData[] = [];

			for (const doc of salarySnapshots.docs) {
				const match = doc.id.match(/salaries_(\d{4})_(\d{1,2})/);
				const salaryMonth = match
					? `${match[1]}년 ${parseInt(match[2], 10)}월`
					: "알 수 없음";

				const correctionRef = collection(
					db,
					"user",
					"ol7Am3QUxLe8Lm9b4N05UcPUvmJ3",
					"salaries",
					doc.id,
					"salaryCorrection",
				);
				const correctionSnapshots = await getDocs(correctionRef);

				correctionSnapshots.forEach((correctionDoc: QueryDocumentSnapshot) => {
					const data = {
						...correctionDoc.data(),
						month: salaryMonth,
					} as CorrectionData;

					console.log("Fetched Data:", data);

					corrections.push(data);
				});
			}

			setSalaryData(corrections);
			console.log("All Salary Corrections:", corrections);
		} catch (error) {
			console.error("Error fetching salary correction data:", error);
		}
	};

	useEffect(() => {
		fetchSalaryCorrections();
	}, []);

	return (
		<>
			<Header>
				<StyledTitle>급여 정정 신청 내역</StyledTitle>
				<Select
					width="150px"
					options={[
						{ value: "2024", label: "2024" },
						{ value: "2023", label: "2023" },
						{ value: "2022", label: "2022" },
					]}
				/>
			</Header>
			<CardContainer>
				{salaryData.map((item, index) => (
					<Card
						key={index}
						onClick={() => {
							setSelectedData(item);
							setHistoryModalOpen(true);
						}}
					>
						<CardLeft>
							<StatusBadge status={item.status} />
							<Month>{item.month} 급여 내역</Month>
						</CardLeft>
						<CardRight>
							<DateTime>{item.date}</DateTime>
							<Arrow>
								<LeftArrow
									width="12"
									height="12"
									style={{ transform: "rotate(180deg)" }}
								/>
							</Arrow>
						</CardRight>
					</Card>
				))}

				{selectedData && (
					<CorrectionRequestModaled
						isOpen={isHistoryModalOpen}
						onClose={() => setHistoryModalOpen(false)}
						status={selectedData.status}
						amount={selectedData.amount}
						correctionType={selectedData.correctionType}
						reason={selectedData.reason}
					/>
				)}
			</CardContainer>
		</>
	);
};

export default SalaryCorrectionPage;
