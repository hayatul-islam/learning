import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="counter-container">
      <h2>Counter</h2>
      <p class="counter-value">{{ counterValue() }}</p>

      <div class="button-group">
        <button class="btn decrement" (click)="decrement()">−</button>
        <button class="btn reset" (click)="reset()">Reset</button>
        <button class="btn increment" (click)="increment()">+</button>
      </div>
    </div>
  `,
  styles: [
    `
      .counter-container {
        text-align: center;
        padding: 20px;
        max-width: 500px;
        margin: auto;
        background: #f8f9fa;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: #333;
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .counter-value {
        font-size: 2rem;
        font-weight: bold;
        color: #007bff;
        margin-bottom: 50px;
      }

      .button-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .btn {
        padding: 10px 15px;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
      }

      .increment {
        background: #28a745;
        color: white;
      }

      .decrement {
        background: #dc3545;
        color: white;
      }

      .reset {
        background: #ffc107;
        color: #333;
      }

      .btn:hover {
        opacity: 0.8;
      }
    `,
  ],
})
export class CounterComponent {
  counterValue = signal(0);

  increment() {
    this.counterValue.update((val) => val + 1);
  }
  decrement() {
    this.counterValue.update((val) => val - 1);
  }
  reset() {
    this.counterValue.set(0);
  }
}
