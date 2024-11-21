import { Component } from '@angular/core';
import { MarvellousChkPipe } from '../marvellous-chk.pipe';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [MarvellousChkPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
}
