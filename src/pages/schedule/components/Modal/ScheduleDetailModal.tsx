import { Modal } from "@/components";
import {
	ColorField,
	DetailLabel,
	FieldValue,
	DetailInputContainer,
} from "./scheduleModal.styled";
import { ScheduleViewModalProps } from "../../types/schedule";

const ScheduleDetailModal = ({
	isOpen,
	onClose,
	detailData,
}: ScheduleViewModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			title="일정 상세"
			onClose={onClose}
			confirmLabel="수정"
		>
			<DetailInputContainer>
				<DetailLabel>제목</DetailLabel>
				<FieldValue>{detailData?.title}</FieldValue>
			</DetailInputContainer>
			<DetailInputContainer>
				<DetailLabel>날짜</DetailLabel>
				<FieldValue>{detailData?.start_date}</FieldValue>
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
