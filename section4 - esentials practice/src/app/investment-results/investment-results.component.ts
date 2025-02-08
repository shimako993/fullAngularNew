import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultData;
  }
}
