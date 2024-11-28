import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})

export class Child1Component 
{
  public iValue : number = 13;
  public bRet : boolean = false;

  public constructor(private nobj : NumberService)
  {
    this.bRet = nobj.ChkPrime(this.iValue);
  }
}