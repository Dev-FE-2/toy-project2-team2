import { SalaryData } from "@/pages/salary/types/salaryData";

//총 공제액
export const calculateTotalDeductions = (data: SalaryData): number => {
	return (
		data.nationalPension +
		data.healthInsurance +
		data.longTermCareInsurance +
		data.employmentInsurance +
		data.incomeTax +
		data.localIncomeTax
	);
};

//실 지급액
export const calculateActualPayment = (data: {
	baseSalary: number;
	nationalPension: number;
	healthInsurance: number;
	longTermCareInsurance: number;
	employmentInsurance: number;
	incomeTax: number;
	localIncomeTax: number;
}): number => {
	const totalDeductions =
		data.nationalPension +
		data.healthInsurance +
		data.longTermCareInsurance +
		data.employmentInsurance +
		data.incomeTax +
		data.localIncomeTax;

	return data.baseSalary - totalDeductions;
};

// 총 지급액
export const calculateGrossPayment = (data: SalaryData): number => {
	return data.baseSalary;
};
