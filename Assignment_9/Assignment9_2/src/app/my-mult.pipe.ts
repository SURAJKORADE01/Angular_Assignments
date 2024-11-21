import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})

export class MyMultPipe implements PipeTransform 
{
  transform(value: number, ...args: number[]): number 
  {
    var iMult = 0;

    iMult = value * args[0];

    return iMult;
  }
}
