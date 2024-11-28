import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StringService 
{
  constructor() {}

  public CountCapital(str : string) : number
  {
    var iCount : number = 0;

    for(var iCnt = 0; iCnt < str.length; iCnt++)
    {
      if((str[iCnt] >= 'A') && (str[iCnt] <= 'Z'))
      {
        iCount++;
      }
    }

    return iCount;
  }
}