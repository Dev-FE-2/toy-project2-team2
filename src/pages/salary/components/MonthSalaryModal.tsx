import CustomSelect from "@/components/Select";
import Modal from "@/components/Modal";
import {
	ListContainer,
	ListItem,
	Month,
	Salary,
} from "./MonthSalaryModal.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { useMonthlySalaryModal } from "@/hooks/useMonthlySalaryModal";

interface MonthlySalaryModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const MonthlySalaryModal = ({ isOpen, onClose }: MonthlySalaryModalProps) => {
	const userId = useSelector((state: RootState) => state.loginAuth.uid);
	const { selectedYear, setSelectedYear, yearlySalaryData, years } =
		useMonthlySalaryModal({ userId });

	return (
		<Modal
			isOpen={isOpen}
			title="월별 급여"
			onClose={onClose}
			buttons={[
				{
					label: "닫기",
					onClick: onClose,
					buttonType: "white",
				},
			]}
		>
			<CustomSelect
				options={years.map((year) => ({ value: year, label: year }))}
				value={selectedYear}
				onChange={(value) => setSelectedYear(value)}
			/>
			<ListContainer>
				{yearlySalaryData.length > 0 ? (
					yearlySalaryData.map((data, index) => (
						<ListItem key={index}>
							<Month>{data?.month || "월 정보 없음"}</Month>
							<Salary>
								{typeof data?.salary === "number"
									? `${data.salary.toLocaleString()}원`
									: "데이터 없음"}
							</Salary>
						</ListItem>
					))
				) : (
					<p>해당 연도의 데이터가 없습니다.</p>
				)}
			</ListContainer>
		</Modal>
	);
};

export default MonthlySalaryModal;
