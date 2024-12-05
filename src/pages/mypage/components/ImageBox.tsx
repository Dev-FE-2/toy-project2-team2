import { Button } from "@/components";
import { ImageBoxContianer, ImageCircle, UserImage } from "./ImageBox.styled";
import profileImage from "@/assets/img/profile.png";

export const ImageBox = () => {
	return (
		<ImageBoxContianer>
			<ImageCircle>
				<UserImage src={profileImage} alt="프로필이미지" />
			</ImageCircle>
			<Button size="small">프로필 이미지 변경</Button>
		</ImageBoxContianer>
	);
};
