import { Button } from "@/components";
import { ImageBoxContainer, ImageCircle, UserImage } from "./ImageBox.styled";
import profileImage from "@/assets/img/profile.png";
import { userImageData } from "../type/ImageBox";

export const ImageBox = ({ userImageData }: userImageData) => {
	return (
		<ImageBoxContainer>
			<ImageCircle>
				<UserImage
					src={userImageData === null ? profileImage : userImageData}
					alt="프로필이미지"
				/>
			</ImageCircle>
			<Button size="small">프로필 이미지 변경</Button>
		</ImageBoxContainer>
	);
};
