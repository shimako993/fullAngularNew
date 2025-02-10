export interface InvestmentModel {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface ResultsModel {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
}
