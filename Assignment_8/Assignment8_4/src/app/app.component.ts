import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public str : string = "";

  public CalculateLength(event : Event) : void
  {
    const inputElement = event.target as HTMLInputElement;
    this.str = inputElement.value;
  }
}

// When the user types in the text box, the input event is triggered.
// The event object carries details about the event.
// event.target points to the text box where the typing occurred.
// event.target as HTMLInputElement allows safe access to the .value property of the text box.
// this.str = inputElement.value updates the component’s str property with the user’s input.
