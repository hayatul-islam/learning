import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h2>{{ title }}</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  `,
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        background-color: #007bff;
        color: white;
      }
      nav a {
        margin-left: 15px;
        color: white;
        text-decoration: none;
      }
      nav a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class HeaderComponent {
  title = 'My Angular App';
}
