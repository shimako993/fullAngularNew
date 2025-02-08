import { Component } from '@angular/core';
import { InvestmentResutsComponent } from "./investment-resuts/investment-resuts.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResutsComponent, UserInputComponent],
})
export class AppComponent {}
