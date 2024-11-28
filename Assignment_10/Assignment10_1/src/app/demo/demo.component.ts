import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent 
{
  public iValue1 : number = 21;
  public iValue2 : number = 11;
  
  public iAdd : number = 0;
  public iSub : number = 0;

  public constructor(private aobj : ArithmeticService)
  {
    this.iAdd = aobj.Addition(this.iValue1,this.iValue2);
    this.iSub = aobj.Subtraction(this.iValue1,this.iValue2);
  }
}