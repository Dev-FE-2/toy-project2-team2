import { Input, Modal } from "@/components";
import { DetailLabel, FieldValue } from "./scheduleModal.styled";
import { InputContainer } from "@/components/Input/Input.style";

const ScheduleDetailModal = ({ isOpen, onClose }: any) => {
	return (
		<Modal
			isOpen={isOpen}
			title="일정 상세"
			onClose={onClose}
			confirmLabel="수정"
		>
			<InputContainer>
				<DetailLabel>제목</DetailLabel>
				<FieldValue>제목입니다.</FieldValue>
			</InputContainer>
			<InputContainer>
				<DetailLabel>날짜</DetailLabel>
				<FieldValue>2024-12-12</FieldValue>
			</InputContainer>

			<Input type="color" label="컬러 라벨" value={"#125631"} readOnly />
			<InputContainer>
				<DetailLabel>제목</DetailLabel>
				<FieldValue>메모입니다.</FieldValue>
			</InputContainer>
		</Modal>
	);
};

export default ScheduleDetailModal;
