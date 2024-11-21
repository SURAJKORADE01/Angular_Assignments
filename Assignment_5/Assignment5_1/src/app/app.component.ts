import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstCompComponent],
  template: `
    <app-first-comp></app-first-comp>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment5_1';
}
