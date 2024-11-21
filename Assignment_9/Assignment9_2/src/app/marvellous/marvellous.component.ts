import { Component } from '@angular/core';
import { MyAddPipe } from '../my-add.pipe';
import { MyMultPipe } from '../my-mult.pipe';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [MyAddPipe,MyMultPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public iNo1 : number = 8;
  public iNo2 : number = 3;

  public iNo3 : number = 7;
  public iNo4 : number = 3;
}
