import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { deleteObject, listAll, StorageReference } from "firebase/storage";

export const updateUserInfoData = async (
	uid: string,
	userInfoData: {
		email: string;
		name: string;
		team: string;
		grade: string;
		photoURL: string;
	},
	imgUrl?: string,
) => {
	const docRef = doc(db, "user", uid);
	await updateDoc(docRef, {
		email: userInfoData.email,
		name: userInfoData.name,
		team: userInfoData.team,
		grade: userInfoData.grade,
		photoURL: imgUrl || userInfoData.photoURL,
	});
};

export const deleteStorageFile = async (filePath: StorageReference) => {
	try {
		const result = await listAll(filePath);
		for (const item of result.items) {
			await deleteObject(item);
		}
	} catch (error) {
		console.error("이미지 파일 삭제 중 오류 발생:", error);
	}
};

export const validateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
	const maxSizeMB = 5;
	const maxSizeBytes = maxSizeMB * 1024 * 1024;
	const allowedExtentions = ["jpg", "jpeg", "png", "webp"];
	if (e.target.files === null) {
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
};
