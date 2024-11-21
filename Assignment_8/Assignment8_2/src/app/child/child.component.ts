import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() public ParentData : any;

  @Output() public MyEvent = new EventEmitter();

  public SendMessageToParent()
  {
    this.MyEvent.emit("Hello from Child");
  }
}
