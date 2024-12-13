import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone : true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
  providers : [Validators, FormBuilder]
})

export class MarvellousComponent 
{
  public fbobj = new FormBuilder();
  public ShowOptions : boolean = false;

  MarvellousForm = this.fbobj.group(
    {
      firstname :['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)] ],
      email : ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      phone : ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      city : ['',[Validators.required, Validators.minLength(4)]],
      state : ['',[Validators.required]],
      zip_code : ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]+$')]],
      comment : ['',[Validators.required, Validators.minLength(30)]]
    }
  );

  public SelectCity() : void
  {
    this.ShowOptions = !this.ShowOptions;
  }

  public selectState(state : string) : void
  {
    this.MarvellousForm.get('state')?.setValue(state);
    this.ShowOptions = false;
  }
}
