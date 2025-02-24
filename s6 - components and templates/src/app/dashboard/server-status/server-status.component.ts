import { Component, OnInit, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const number = Math.random();
      if (number < 0.5) {
        this.currentStatus = 'online';
      } else if (number < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
