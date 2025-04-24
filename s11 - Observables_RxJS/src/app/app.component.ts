import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000)
  intervalSignal = toSignal(this.interval$, {initialValue: 0})
  // interval = signal(0)
  // doubleInterval = computed(()=>this.interval() * 2)
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(()=>{
    //   console.log(`Clicked button ${this.clickCount()} times`)
    // })
  }

  ngOnInit(): void {
    // setInterval(()=>{
    // this.interval.update(prevIntervalNumber => prevIntervalNumber + 1)
    // })
    // gore i dolje razlika

    // const subscription = interval(1000)
    //   .pipe(map((val) => val + 1))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times`),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
