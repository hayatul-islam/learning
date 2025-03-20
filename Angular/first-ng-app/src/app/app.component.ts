import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        max-width: 1400px;
        margin: auto;
        padding: 0 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
