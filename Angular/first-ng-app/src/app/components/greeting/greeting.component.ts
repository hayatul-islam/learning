import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ message() }}
    </p>
  `,
  styles: ``,
})
export class GreetingComponent {
  message = input();
}
