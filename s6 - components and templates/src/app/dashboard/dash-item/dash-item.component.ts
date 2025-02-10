import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dash-item',
  standalone: true,
  imports: [],
  templateUrl: './dash-item.component.html',
  styleUrl: './dash-item.component.css',
})
export class DashItemComponent {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({required: true}) title!: string;
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
