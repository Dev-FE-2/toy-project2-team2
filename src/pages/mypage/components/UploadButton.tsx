import { Button } from "@/components";
import { UploadButtonContainer } from "./UploadButton.styled";
import { useRef } from "react";
import { storage } from "@/firebase";
import {
	deleteObject,
	getDownloadURL,
	listAll,
	ref,
	uploadBytes,
} from "firebase/storage";
import { updateImageURL } from "@/services/mypageUpdateService";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { getUserData } from "@/services/getDatas";
import { setUserInfo } from "@/store/slices/userInfoSlice";
import { useDispatch } from "react-redux";

export const UploadButton = ({ children }: { children: string }) => {
	const fileInput = useRef<HTMLInputElement | null>(null);
	const uploadStorage = storage;
	const uid = useSelector((state: RootState) => state.loginAuth.uid);
	const dispatch = useDispatch();
	const maxSizeMB = 5;
	const maxSizeBytes = maxSizeMB * 1024 * 1024;
	const allowedExtentions = ["jpg", "jpeg", "png", "webp"];

	const handleClickButton = () => {
		if (!fileInput.current) {
			return;
		}
		fileInput.current.click();
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files[0];
		const fileNameSplit = file.name.split(".");
		const fileExtention = fileNameSplit.pop()?.toLowerCase();
		if (!file) {
			return alert("이미지를 선택해주세요");
		}

		if (!allowedExtentions.includes(fileExtention)) {
			alert("지원하지 않는 확장자입니다.");
			e.target.value = "";
			return;
		} else {
			console.log("지원하는 확장자입니다.");
		}

		if (file.size > maxSizeBytes) {
			alert(`최대 ${maxSizeMB}MB까지 업로드 가능합니다.`);
			e.target.value = "";
			return;
		}
		const imageRef = ref(uploadStorage, `images/${uid.userId}/` + file.name);
		const deleteFilePath = ref(uploadStorage, `images/${uid?.userId}`);
		try {
			const result = await listAll(deleteFilePath);
			for (const item of result.items) {
				await deleteObject(item);
			}
		} catch (error) {
			console.error("파일 삭제 중 오류 발생:", error);
		}

		await uploadBytes(imageRef, file);
		const imgUrl = await getDownloadURL(imageRef);

		await updateImageURL(uid, imgUrl);
		if (uid !== null) {
			const userData = await getUserData(uid.userId);
			if (userData) {
				dispatch(
					setUserInfo({
						email: userData.email,
						name: userData.name,
						team: userData.team,
						grade: userData.grade,
						photoURL: userData.photoURL,
					}),
				);
			} else {
				console.log(
					"데이터를 가져오는 중 문제가 발생했습니다. 다시 시도해주세요",
				);
			}
		}
	};

	return (
		<UploadButtonContainer>
			<input
				type="file"
				accept={".jpg, .jpeg, .png, .webp"}
				ref={fileInput}
				onChange={handleChange}
			></input>
			<Button size="small" onClick={handleClickButton}>
				{children}
			</Button>
		</UploadButtonContainer>
	);
};
