import { ImageBoxContainer, ImageCircle, UserImage } from "./ImageBox.styled";
import profileImage from "@/assets/img/profile.png";
import { userImageDataProps } from "../../type/ImageBox";
import { UploadButton } from "./UploadButton";

export const ImageBox = ({ userImageData, $isEditing }: userImageDataProps) => {
	return (
		<ImageBoxContainer>
			<ImageCircle>
				<UserImage
					src={userImageData === null ? profileImage : userImageData}
					alt="프로필이미지"
				/>
			</ImageCircle>
			<UploadButton $isEditing={$isEditing} />
		</ImageBoxContainer>
	);
};
