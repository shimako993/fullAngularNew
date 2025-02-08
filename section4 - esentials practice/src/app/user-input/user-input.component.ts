import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-resuts/investment.service';
import { InvestedCalculator } from '../investment-resuts/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;


  constructor(private investmentService: InvestmentService) {}

  onCalculate() {
   this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
