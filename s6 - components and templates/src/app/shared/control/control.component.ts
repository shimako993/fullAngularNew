import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  // @Input({ required: true }) label!: string;
  label = input.required<string>

}
