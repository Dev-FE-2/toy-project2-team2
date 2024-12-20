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
	deleteDoc,
} from "firebase/firestore";

type ScheduleCollectionRef = ReturnType<typeof collection>;

// 일정 컬렉션 참고 가져오는 함수
const getScheduleCollectionRef = (uid: string): ScheduleCollectionRef =>
	collection(db, "user", uid, "schedule");

// 고유 일정 ID 생성하는 함수
const generateScheduleId = (date: Date): string => {
	const formattedDate = format(date, "yyyy_MM_dd");
	const currentTime = format(new Date(), "HH_mm_ss");
	return `schedule_${formattedDate}_${currentTime}`;
};

// 일정 데이터 포맷 맞추는 함수
const formatScheduleData = (data: any) => ({
	title: data.title,
	content: data.content,
	color: data.color,
	start_date: convertDateToLocaleString(data.start_date.toDate()),
	end_date: data.end_date
		? convertDateToLocaleString(data.end_date.toDate())
		: null,
});

// DB에서 정해진 기간의 일정 데이터 가져오는 함수
const getScheduleData = async (
	uid: string,
	startDate: Date,
	endDate?: Date,
): Promise<ScheduleData[]> => {
	try {
		const colRef = getScheduleCollectionRef(uid);
		endDate = endDate || startOfDay(addDays(startDate, 1));

		const q = query(
			colRef,
			where("start_date", ">=", startOfDay(startDate)),
			where("start_date", "<", endDate),
		);

		const querySnapshot = await getDocs(q);

		return querySnapshot.empty
			? []
			: querySnapshot.docs.map((doc) => ({
					schedule_id: doc.id,
					...formatScheduleData(doc.data()),
				}));
	} catch (error) {
		throw new Error("일정을 조회하는 중에 오류가 발생하였습니다.");
	}
};

// DB에 일정 추가하는 함수
const insertSchedule = async (
	uid: string,
	scheduleData: Omit<ScheduleData, "schedule_id">,
): Promise<string> => {
	try {
		const colRef = getScheduleCollectionRef(uid);
		const startDate = new Date(scheduleData.start_date);
		const scheduleId = generateScheduleId(startDate);
		const docRef = doc(colRef, scheduleId);

		await setDoc(docRef, { ...scheduleData, start_date: startDate });
		return scheduleId;
	} catch (error) {
		throw new Error("일정을 등록하는 중에 오류가 발생하였습니다.");
	}
};

// DB에 있는 일정 수정하는 함수
const updateSchedule = async (
	uid: string,
	scheduleData: ScheduleData,
): Promise<string> => {
	try {
		const colRef = getScheduleCollectionRef(uid);
		const docRef = doc(colRef, scheduleData.schedule_id);
		const formattedScheduleData = {
			...scheduleData,
			start_date: new Date(scheduleData.start_date),
		};

		await updateDoc(docRef, formattedScheduleData);
		return scheduleData.schedule_id;
	} catch (error) {
		throw new Error("일정을 수정하는 중에 오류가 발생하였습니다.");
	}
};

// DB에서 일정 삭제하는 함수
const deleteSchedule = async (
	uid: string,
	scheduleId: string,
): Promise<string> => {
	try {
		const colRef = getScheduleCollectionRef(uid);
		const docRef = doc(colRef, scheduleId);

		await deleteDoc(docRef);
		return scheduleId;
	} catch (error) {
		throw new Error("일정을 삭제하는 중에 오류가 발생하였습니다.");
	}
};

export { getScheduleData, insertSchedule, updateSchedule, deleteSchedule };
