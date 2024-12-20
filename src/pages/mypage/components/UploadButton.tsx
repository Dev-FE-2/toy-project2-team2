import RotateIcon from "@/assets/img/rotate_icon.svg?react";
import { UploadButtonContainer } from "./UploadButton.styled";
import { useEffect, useRef } from "react";

export const UploadButton = ({
	$isEditing,
	onChange,
}: {
	$isEditing: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const fileInput = useRef<HTMLInputElement | null>(null);

	const handleClickButton = () => {
		if (!fileInput.current) {
			return;
		}
		fileInput.current.click();
	};
	useEffect(() => {
		if (!$isEditing && fileInput.current) {
			fileInput.current.value = "";
		}
	}, [$isEditing]);

	return (
		<UploadButtonContainer $isEditing={$isEditing}>
			<input
				type="file"
				accept={".jpg, .jpeg, .png, .webp"}
				ref={fileInput}
				onChange={onChange}
			></input>
			<div>
				<RotateIcon onClick={handleClickButton} />
			</div>
		</UploadButtonContainer>
	);
};
