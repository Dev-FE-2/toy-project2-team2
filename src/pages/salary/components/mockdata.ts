export type SalaryData = {
	month: string;
	salary: number;
};

export type YearlySalaryData = {
	[year: string]: SalaryData[];
};

export const yearlySalaryData: YearlySalaryData = {
	"2024": [
		{ month: "1월", salary: 3100000 },
		{ month: "2월", salary: 3200000 },
		{ month: "3월", salary: 3300000 },
		{ month: "4월", salary: 3400000 },
		{ month: "5월", salary: 3500000 },
		{ month: "6월", salary: 3600000 },
		{ month: "7월", salary: 3700000 },
		{ month: "8월", salary: 3800000 },
		{ month: "9월", salary: 3900000 },
		{ month: "10월", salary: 4000000 },
		{ month: "11월", salary: 4100000 },
		{ month: "12월", salary: 4200000 },
	],
	"2023": [
		{ month: "1월", salary: 2900000 },
		{ month: "2월", salary: 3000000 },
		{ month: "3월", salary: 3100000 },
		{ month: "4월", salary: 3200000 },
		{ month: "5월", salary: 3300000 },
		{ month: "6월", salary: 3400000 },
		{ month: "7월", salary: 3500000 },
		{ month: "8월", salary: 3600000 },
		{ month: "9월", salary: 3700000 },
		{ month: "10월", salary: 3800000 },
		{ month: "11월", salary: 3900000 },
		{ month: "12월", salary: 4000000 },
	],
};
