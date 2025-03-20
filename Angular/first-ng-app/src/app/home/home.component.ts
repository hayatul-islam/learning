import { Component, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  template: `
    <app-greeting [message]="message()" />
    <app-counter />
  `,
  styles: ``,
})
export class HomeComponent {
  message = signal('Hello world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(event.key);
  }
}
