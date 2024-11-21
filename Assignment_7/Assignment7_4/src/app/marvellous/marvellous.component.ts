import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent 
{
  public str : string = "MarveLLouS InfoSySteMs";

  public LowerCase() : string
  {
    this.str = this.str.toLowerCase();
    return this.str;
  }

  public UpperCase() : string
  {
    this.str = this.str.toUpperCase();
    return this.str;
  }
}
