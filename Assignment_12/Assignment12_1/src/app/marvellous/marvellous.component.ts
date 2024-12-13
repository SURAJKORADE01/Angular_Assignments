import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent 
{
  MarvellousForm = new FormGroup(
    {
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
    }
  )
}
