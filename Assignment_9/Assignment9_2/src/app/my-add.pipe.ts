import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform 
{
  transform(value: number, ...args: number[]): number
  {
    var iSum : number = 0;

    iSum = value + args[0];

    return iSum;
  }
}
