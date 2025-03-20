import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <div class="header">
        <h2>{{ title }}</h2>
        <nav>
          <a href="#">Home</a>
          <a href="/todos">Todos</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
      header {
        background-color: #007bff;
      }
      .header {
        max-width: 1400px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
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
