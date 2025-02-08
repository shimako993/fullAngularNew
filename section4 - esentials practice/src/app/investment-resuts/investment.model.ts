export interface InvestedCalculator {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestedTableModel {
  investmentValue: number;
  yearInterest: number;
  totalInterest: number;
  investedCapital: number;
}
