import { UserInfoState } from "@/types/store";

export interface userImageDataProps {
	userImageData: UserInfoState["photoURL"];
	$isEditing: boolean;
}
