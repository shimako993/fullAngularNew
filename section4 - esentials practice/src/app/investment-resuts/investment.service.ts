import { Injectable } from '@angular/core';
import { InvestedCalculator } from './investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor() {}

  private results: any[] = [];

  calculateInvestmentResults(investedCalculator: InvestedCalculator) {
    const annualData = [];
    let investmentValue = investedCalculator.initialInvestment;

    for (let i = 0; i < investedCalculator.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investedCalculator.expectedReturn / 100);
      investmentValue +=
        interestEarnedInYear + investedCalculator.annualInvestment;
      const totalInterest =
        investmentValue -
        investedCalculator.annualInvestment * year -
        investedCalculator.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investedCalculator.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investedCalculator.initialInvestment +
          investedCalculator.annualInvestment * year,
      });
    }
    // return annualData;

    this.setResults(annualData);
  }

  private setResults(data: any) {
    this.results = data;
    console.log(this.results);
  }

  getResults() {
    return this.results
  }
}
