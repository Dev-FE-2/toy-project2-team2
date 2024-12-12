import { db } from "@/firebase";
import type { ScheduleData } from "@/types";
import { convertDateToLocaleString } from "@/utils";
import { startOfDay, format, addDays } from "date-fns";
import {
	getDocs,
	collection,
	query,
	where,
	doc,
	setDoc,
	updateDoc,
} from "firebase/firestore";

// 로그인한 유저의 일정 collection 참조 조회 함수
const getMyScheduleCollection = (uid: string) =>
	collection(db, "user", uid, "schedule");

// 일정 ID를 생성하는 함수 (일정 날짜와 현재 등록 시간의 조합) - 중복 방지
const generateScheduleId = (date: Date) => {
	const formattedDate = format(date, "yyyy_MM_dd");
	const currentTime = format(new Date(), "HH_mm_ss");
	return `schedule_${formattedDate}_${currentTime}`;
};

const getScheduleData = async (
	uid: string,
	startDate: Date,
	endDate?: Date,
) => {
	if (!endDate) endDate = startOfDay(addDays(startDate, 1));

	try {
		const colRef = getMyScheduleCollection(uid);

		const q = query(
			colRef,
			where("start_date", ">=", startOfDay(startDate)),
			where("start_date", "<", endDate),
		);

		const querySnapshot = await getDocs(q);

		if (querySnapshot.empty) return [];

		return querySnapshot.docs.map((doc) => {
			const data = doc.data();
			return {
				schedule_id: doc.id,
				title: data.title,
				content: data.content,
				color: data.color,
				start_date: convertDateToLocaleString(data.start_date.toDate()),
				end_date: data.end_date
					? convertDateToLocaleString(data.end_date.toDate())
					: null,
			};
		});
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const insertSchedule = async (
	uid: string,
	scheduleData: Omit<ScheduleData, "schedule_id">,
) => {
	const colRef = getMyScheduleCollection(uid);

	// 새로운 schedule_id 생성
	const startDate = new Date(scheduleData.start_date);
	const newScheduleId = generateScheduleId(startDate);

	// 문서 ID를 직접 지정하여 문서 추가
	const docRef = doc(colRef, newScheduleId);

	const formattedScheduleData = {
		...scheduleData,
		start_date: startDate,
	};

	try {
		// 지정된 문서 ID에 데이터 저장
		await setDoc(docRef, formattedScheduleData);
		return newScheduleId;
	} catch (error) {
		console.error("Error insert document: ", error);
		throw error;
	}
};

const updateSchedule = async (uid: string, scheduleData: ScheduleData) => {
	// Firestore 컬렉션 참조
	const colRef = getMyScheduleCollection(uid);

	const scheduleId = scheduleData.schedule_id;

	// 문서 참조 생성
	const docRef = doc(colRef, scheduleId);

	// 날짜를 Date 객체로 변환
	const formattedScheduleData = {
		...scheduleData,
		start_date: new Date(scheduleData.start_date),
	};

	try {
		// Firestore에 문서 업데이트
		await updateDoc(docRef, formattedScheduleData);
		return scheduleId;
	} catch (error) {
		console.error("Error updating document: ", error);
		throw error;
	}
};

export { getScheduleData, insertSchedule, updateSchedule };
