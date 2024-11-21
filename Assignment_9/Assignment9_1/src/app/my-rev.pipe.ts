import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform 
{
  transform(value: string): string 
  {
    var sTemp : string = "";

    for(var iCnt = value.length - 1; iCnt >= 0; iCnt--)
    {
      sTemp = sTemp + value[iCnt];
    }   

    return sTemp;
  }

}
