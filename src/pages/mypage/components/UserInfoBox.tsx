import {
	ImageBoxContainer,
	ImageCircle,
	InfoTitle,
	InfoValue,
	UserImage,
	UserInfoBoxContainer,
	UserInfoContent,
} from "./UserInfoBox.styled";
import { Input } from "@/components";
import { useState } from "react";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import {
	deleteStorageFile,
	updateUserInfoData,
	validateFile,
} from "@/services/MyPageService";
import { getUserData } from "@/services/getDatas";
import { UserInfoUpdateButton } from "./UserInfoUpdateButton";
import { UploadButton } from "./UploadButton";
import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import profileImage from "@/assets/img/profile.png";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserDataProps } from "../type/UserInfoBox";

export const UserInfoBox = ({ userData }: UserDataProps) => {
	const uid = useAppSelector((state) => state.loginAuth.uid);
	const [$isEditing, $setIsEditing] = useState(false);
	const [userInfoData, setUserInfoData] = useState(userData);
	const [file, setFile] = useState<File | null>(null);
	const [previewURL, setPreviewURL] = useState("");
	const dispatch = useAppDispatch();

	const handleInput = async () => {
		if (!$isEditing) {
			$setIsEditing(true);
		} else {
			if (!userInfoData.grade || !userInfoData.name || !userInfoData.team) {
				alert("이름 또는 소속 또는 직급이 비어있습니다.");
			} else {
				if (uid) {
					let imgUrl = userData.photoURL;
					if (file !== null) {
						const imageRef = ref(storage, `images/${uid}/` + file.name);
						const deleteFilePath = ref(storage, `images/${uid}`);
						await deleteStorageFile(deleteFilePath);
						await uploadBytes(imageRef, file);
						imgUrl = await getDownloadURL(imageRef);
						setUserInfoData({
							...userInfoData,
							photoURL: imgUrl,
						});
						setFile(null);
					}

					await updateUserInfoData(uid, userInfoData, imgUrl);
					const newUserData = await getUserData(uid);
					dispatch(setUserInfo(newUserData));
					$setIsEditing(false);
				} else {
					alert("데이터를 가져오는 중 문제가 발생했습니다. 다시 시도해주세요");
				}
			}
		}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserInfoData({
			...userInfoData,
			[name]: value,
		});
	};
	const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		validateFile(e);
		if (e.target.files !== null) {
			setFile(e.target.files[0]);
			setPreviewURL(URL.createObjectURL(e.target.files[0]));
		}
	};
	const cancelEditing = () => {
		setUserInfoData(userData);
		setPreviewURL("");
		setFile(null);
		$setIsEditing(false);
	};

	return (
		<>
			<ImageBoxContainer>
				<ImageCircle>
					<UserImage
						src={previewURL || userInfoData.photoURL || profileImage}
						alt="프로필이미지"
					/>
				</ImageCircle>
				<UploadButton $isEditing={$isEditing} onChange={inputHandleChange} />
			</ImageBoxContainer>
			<UserInfoBoxContainer>
				<UserInfoContent>
					<InfoTitle>
						<div>Email</div>
						<div>이름</div>
						<div>소속</div>
						<div>직급</div>
					</InfoTitle>
					<InfoValue readOnly={!$isEditing}>
						<Input value={userInfoData.email} readOnly />
						<Input
							value={userInfoData.name}
							readOnly={!$isEditing}
							onChange={handleChange}
							name="name"
							autoComplete="off"
						/>
						<Input
							value={userInfoData.team}
							readOnly={!$isEditing}
							onChange={handleChange}
							name="team"
							autoComplete="off"
						/>
						<Input
							value={userInfoData.grade}
							readOnly={!$isEditing}
							onChange={handleChange}
							name="grade"
							autoComplete="off"
						/>
					</InfoValue>
				</UserInfoContent>
				<UserInfoUpdateButton
					$isEditing={$isEditing}
					onClick={{ handleInput, cancelEditing }}
				/>
			</UserInfoBoxContainer>
		</>
	);
};
