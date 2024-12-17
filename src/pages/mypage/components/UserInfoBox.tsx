import {
	ImageBoxContainer,
	ImageCircle,
	InfoTitle,
	InfoValue,
	UserImage,
	UserInfoBoxContainer,
	UserInfoContent,
} from "./UserInfoBox.styled";
import { UserDataProps } from "../type/UserInfoBox";
import { Input } from "@/components";
import { useState } from "react";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import { updateUserInfoData } from "@/services/mypageUpdateService";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { UserInfoUpdateButton } from "./UserInfoUpdateButton";
import { UploadButton } from "./UploadButton";
import { storage } from "@/firebase";
import {
	deleteObject,
	getDownloadURL,
	listAll,
	ref,
	uploadBytes,
} from "firebase/storage";
import profileImage from "@/assets/img/profile.png";
import { useAppDispatch } from "@/hooks";

export const UserInfoBox = ({
	userData,
	$isEditing,
	$setIsEditing,
}: UserDataProps) => {
	const uid = useSelector((state: RootState) => state.loginAuth.uid);
	const [userInfoData, setUserInfoData] = useState({
		email: userData.email,
		name: userData.name,
		team: userData.team,
		grade: userData.grade,
		photoURL: userData.photoURL,
	});
	const [file, setFile] = useState<File | null>(null);
	const dispatch = useAppDispatch();
	const handleInput = async () => {
		if (!$isEditing) {
			$setIsEditing(true);
		} else {
			if (
				userInfoData.grade === "" ||
				userInfoData.name === "" ||
				userInfoData.team === ""
			) {
				alert("이름 또는 소속 또는 직급이 비어있습니다.");
				setUserInfoData({
					email: userData.email,
					name: userData.name,
					team: userData.team,
					grade: userData.grade,
					photoURL: userData.photoURL,
				});
			} else {
				if (uid) {
					if (file !== null) {
						const uploadStorage = storage;
						const imageRef = ref(uploadStorage, `images/${uid}/` + file.name);
						const deleteFilePath = ref(uploadStorage, `images/${uid}`);
						try {
							const result = await listAll(deleteFilePath);
							for (const item of result.items) {
								await deleteObject(item);
							}
						} catch (error) {
							console.error("이미지 파일 삭제 중 오류 발생:", error);
						}

						await uploadBytes(imageRef, file);
						const imgUrl = await getDownloadURL(imageRef);
						setUserInfoData({
							...userInfoData,
							photoURL: imgUrl,
						});
						setFile(null);
					}
					await updateUserInfoData(uid, userInfoData);
					const newUserData = await getUserData(uid);
					dispatch(
						setUserInfo({
							email: newUserData.email,
							name: newUserData.name,
							team: newUserData.team,
							grade: newUserData.grade,
							photoURL: newUserData.photoURL,
						}),
					);
					$setIsEditing(false);
				} else {
					alert("데이터를 가져오는 중 문제가 발생했습니다. 다시 시도해주세요");
				}
			}
		}
	};
	const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInfoData({
			...userInfoData,
			[name]: value,
		});
	};
	const inputHandleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const maxSizeMB = 5;
		const maxSizeBytes = maxSizeMB * 1024 * 1024;
		const allowedExtentions = ["jpg", "jpeg", "png", "webp"];
		if (e.target.files !== null) {
			setFile(e.target.files[0]);
		} else {
			return alert("이미지를 선택해주세요");
		}
		const file = e.target.files[0];
		const fileNameSplit = file.name.split(".");
		const fileExtention = fileNameSplit.pop().toLowerCase();

		if (!allowedExtentions.includes(fileExtention)) {
			alert("지원하지 않는 확장자입니다.");
			e.target.value = "";
			return;
		}

		if (file.size > maxSizeBytes) {
			alert(`최대 ${maxSizeMB}MB까지 업로드 가능합니다.`);
			e.target.value = "";
			return;
		}
		const previewURL = URL.createObjectURL(file);
		setUserInfoData({
			...userInfoData,
			photoURL: previewURL,
		});
	};
	const cancelEditing = () => {
		setFile(null);
		setUserInfoData({
			email: userData.email,
			name: userData.name,
			team: userData.team,
			grade: userData.grade,
			photoURL: userData.photoURL,
		});
		$setIsEditing(false);
	};

	return (
		<>
			<ImageBoxContainer>
				<ImageCircle>
					<UserImage
						src={
							userInfoData.photoURL === null
								? profileImage
								: userInfoData.photoURL
						}
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
							onChange={handelChange}
							name="name"
							autoComplete="off"
						/>
						<Input
							value={userInfoData.team}
							readOnly={!$isEditing}
							onChange={handelChange}
							name="team"
							autoComplete="off"
						/>
						<Input
							value={userInfoData.grade}
							readOnly={!$isEditing}
							onChange={handelChange}
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
