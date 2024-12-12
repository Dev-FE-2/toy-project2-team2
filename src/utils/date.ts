import { subMilliseconds } from "date-fns";

const convertTimeZone = (date: Date) => {
	const offset = new Date().getTimezoneOffset() * 60000;

	return subMilliseconds(date, offset);
};

// timezone별 날짜의 시간 차이 맞추고 toISOString 으로 반환하는 함수
const convertTimeZoneWithISOString = (date: Date) => {
	return convertTimeZone(date).toISOString();
};

const convertDateToLocaleString = (
	date: Date,
	timeZone: string = "Asia/Seoul",
) => {
	return date.toLocaleString("en-US", { timeZone });
};

export {
	convertTimeZone,
	convertTimeZoneWithISOString,
	convertDateToLocaleString,
};
