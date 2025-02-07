import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment-resuts/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


constructor(private investmentResultService:InvestmentResultService){}

  initialInvestment?: number
  anualInvestment?: number
  expectedReturn?: number
  duration?: number

  

  onCalculate(){
    // this.investmentResultService.calculateInvestmentResults
  }

}
