export interface SalaryData {
	baseSalary: number;
	nationalPension: number;
	healthInsurance: number;
	longTermCareInsurance: number;
	employmentInsurance: number;
	incomeTax: number;
	localIncomeTax: number;
}

export interface SalaryDetailsSectionProps {
	salaryData: SalaryData | null;
	formatNumber: any;
}
