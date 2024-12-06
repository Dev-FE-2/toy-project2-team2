import { Input, Modal, TextArea } from "@/components";
import { getColor } from "@/styles/theme";
import { useState } from "react";
import { useTheme } from "styled-components";

const ScheduleFormModal = ({ mode, isOpen, onClose }: any) => {
	const theme = useTheme();
	const [colorLabel, setColorLabel] = useState(getColor("primary")({ theme }));

	const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColorLabel(e.target.value);
	};

	const handleApply = () => {
		console.log("일정 등록/수정");
		onClose();
	};

	const modalTitle = mode === "insert" ? "일정 등록" : "일정 수정";
	const confirmLabel = mode === "insert" ? "등록" : "수정";

	return (
		<Modal
			isOpen={isOpen}
			title={modalTitle}
			onClose={onClose}
			confirmLabel={confirmLabel}
			onConfirm={handleApply}
		>
			<Input
				type="text"
				label="제목 *"
				placeholder="일정 제목을 입력해주세요"
			/>
			<Input type="date" label="날짜 *" placeholder="날짜를 선택해주세요" />
			<Input
				type="color"
				label="컬러 라벨"
				value={colorLabel}
				onChange={onChangeColor}
			/>
			<TextArea label="메모" placeholder="일정 메모를 입력하세요" />
		</Modal>
	);
};

export default ScheduleFormModal;
