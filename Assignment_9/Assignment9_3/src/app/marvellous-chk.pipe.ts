import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})

export class MarvellousChkPipe implements PipeTransform 
{
  transform(iValue: number, ...args : string[]): string 
  {
    var iCount : number = 0;

    if(args[0] == "Prime")
    {
      for(var iCnt = 1; iCnt <= iValue; iCnt++)
      {
        if(iValue % iCnt == 0)
        {
          iCount++;
        }
      }

      return iCount == 2 ? "It is a Prime number." : "It is NOT a prime number."
    }

    else if(args[0] == "Perfect")
    {
      var iSum : number = 0;

      for(var iCnt = 1; iCnt <= iValue/2; iCnt++)
      {
        if(iValue % iCnt == 0)
        {
          iSum = iSum + iCnt;
        }
      }

      return iSum == iValue ? "It is a Perfect number." :  "It is NOT a Perfect number."
    }

    else if(args[0] == "Even")
    {
      return iValue % 2 == 0 ? "It is a Even number." : "It is NOT a Even number.";
    }

    else if(args[0] == "Odd")
    {
      return iValue % 2 != 0 ? "It is a Odd number." : "It is NOT a Odd number.";
    }

    else
    {
      return "Invalid Check Type."
    }
  }

}
