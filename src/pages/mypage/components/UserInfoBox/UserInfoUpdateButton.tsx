import { Button } from "@/components";
import { EditingButton } from "./UserInfoUpdateButton.styled";
import { UpdateButtonProps } from "../../type/UserInfoUpdateButton";

export const UserInfoUpdateButton = ({
	$isEditing,
	onClick,
}: UpdateButtonProps) => {
	return (
		<EditingButton $isEditing={$isEditing}>
			<Button buttonType={"white"} size="small" onClick={onClick.cancelEditing}>
				취소하기
			</Button>
			<Button size="small" onClick={onClick.handleInput}>
				{$isEditing ? "저장하기" : "정보 수정하기"}
			</Button>
		</EditingButton>
	);
};
