import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})

export class Child2Component 
{
  public str : string = "MARVELLOUS infosystems";
  public iRet : number = 0;

  public constructor(private sobj : StringService)
  {
    this.iRet = sobj.CountCapital(this.str);
  }
}