import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2 [style.color] = "'blue'">
      Static Text : Marvellous Infosystems
    </h2>

    <input [(ngModel)] = "DisplayText" type = "text" [style.color] = "'blue'">
    <h2 [style.color] = "'blue'">Displaying Text is : {{DisplayText}}</h2>
  `,
  styles: ``
})
export class MarvellousComponent {
  public DisplayText : string = ""
} 
