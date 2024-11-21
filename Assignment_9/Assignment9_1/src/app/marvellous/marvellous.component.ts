import { Component } from '@angular/core';
import { MyRevPipe } from '../my-rev.pipe';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [MyRevPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public Name : string = "Marvellous Infosystems"
}
