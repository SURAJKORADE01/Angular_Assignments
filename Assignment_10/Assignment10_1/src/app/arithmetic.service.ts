import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArithmeticService 
{
  constructor() {}

  public Addition(iNo1 : number, iNo2 : number) : number
  {
    return iNo1 + iNo2;
  }

  public Subtraction(iNo1 : number, iNo2 : number) : number
  {
    return iNo1 - iNo2;
  }
}