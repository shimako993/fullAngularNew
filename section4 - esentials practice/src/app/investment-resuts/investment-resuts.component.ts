import { Component, OnInit } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-resuts',
  standalone: true,
  imports: [],
  templateUrl: './investment-resuts.component.html',
  styleUrl: './investment-resuts.component.css',
})
export class InvestmentResutsComponent implements OnInit {
  results: any = [];

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.results = this.investmentService.getResults();
  }

}

// interest: interestEarnedInYear,
//         valueEndOfYear: investmentValue,
//         annualInvestment: investedCalculator.annualInvestment,
//         totalInterest: totalInterest,
//         totalAmountInvested:
