import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumberService 
{
  constructor() {}

  public ChkPrime(iNo : number) : boolean
  {
    var bFlag : boolean = true;

    for(var iCnt = 2; iCnt <= (iNo/2) ; iCnt++)
    {
      if((iNo % iCnt) == 0)
      {
        bFlag = false;
        break;
      }
    }

    return bFlag;
  }
}