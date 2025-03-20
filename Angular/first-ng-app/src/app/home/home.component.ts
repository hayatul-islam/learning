import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  template: `
    <app-greeting [message]="message()" />
    <input type="text" (keyup)="keyUpHandler($event)" />
  `,
  styles: ``,
})
export class HomeComponent {
  message = signal('Hello world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(event.key);
  }
}
