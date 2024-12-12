import { ImageBoxContainer, ImageCircle, UserImage } from "./ImageBox.styled";
import profileImage from "@/assets/img/profile.png";
import { userImageData } from "../../type/ImageBox";
import { UploadButton } from "./UploadButton";

export const ImageBox = ({ userImageData }: userImageData) => {
	return (
		<ImageBoxContainer>
			<ImageCircle>
				<UserImage
					src={userImageData === null ? profileImage : userImageData}
					alt="프로필이미지"
				/>
			</ImageCircle>
			<UploadButton>프로필 이미지 변경</UploadButton>
		</ImageBoxContainer>
	);
};
