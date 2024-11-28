import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent 
{
  public iValue : number = 107;
  public str : string = "marvellous INFOSYSTEMS";

  public bRet : boolean = false;
  public iRet : number = 0;
  
  public constructor(private nobj : NumberService, private sobj : StringService)
  {
    this.bRet = nobj.ChkPrime(this.iValue);
    this.iRet = sobj.CountCapital(this.str);
  }
}