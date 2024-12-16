import { Modal } from "@/components";
import {
	ColorField,
	DetailLabel,
	FieldValue,
	DetailInputContainer,
} from "./scheduleModal.styled";
import { ScheduleViewModalProps } from "../../types/schedule";
import { format } from "date-fns";

const ScheduleDetailModal = ({
	isOpen,
	onClose,
	onConfirm,
	detailData,
}: ScheduleViewModalProps) => {
	const startDate = detailData?.start_date
		? format(new Date(detailData.start_date), "yyyy-MM-dd (E)")
		: "-";
	return (
		<Modal
			isOpen={isOpen}
			title="일정 상세"
			onClose={onClose}
			buttons={[
				{
					label: "취소",
					onClick: onClose,
					buttonType: "white",
					size: "small",
				},
				{
					label: "수정",
					onClick: onConfirm,
					size: "small",
					buttonType: "primary",
				},
			]}
		>
			<DetailInputContainer>
				<DetailLabel>제목</DetailLabel>
				<FieldValue>{detailData?.title}</FieldValue>
			</DetailInputContainer>
			<DetailInputContainer>
				<DetailLabel>날짜</DetailLabel>
				<FieldValue>{startDate}</FieldValue>
			</DetailInputContainer>

			<DetailInputContainer>
				<DetailLabel>컬러 라벨</DetailLabel>
				<ColorField $color={detailData ? detailData.color : "#125631"} />
			</DetailInputContainer>

			<DetailInputContainer>
				<DetailLabel>메모</DetailLabel>
				<FieldValue $isBr={true}>{detailData?.content}</FieldValue>
			</DetailInputContainer>
		</Modal>
	);
};

export default ScheduleDetailModal;
