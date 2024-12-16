import { UserInfoState } from "@/types/store";

export interface UserDataProps {
	userData: UserInfoState;
	$isEditing: boolean;
	$setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
