import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

ngOnInit(): void {
  console.log('ONINIT')
  console.log(this.form().nativeElement)
}

  ngAfterViewInit() {
      console.log('After VIEW INIT')
      console.log(this.form().nativeElement)
  }

  onSubmit(title: string, textInput: string) {
    console.log(title, textInput);
    this.form().nativeElement.reset();
  }
}
