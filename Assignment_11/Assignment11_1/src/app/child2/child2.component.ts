import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})

export class Child2Component 
{
  public Books : string[] = ["Essential Angular by Adam Freeman","Beginning Node.js by Greg Lim","Express.js Guide by Azat", "MongoDB: The Definitive Guide by Shannon Bradshaw, Eoin Brazil, and Kristina Chodorow", "Head First Android Development by Dawn Griffiths, David Griffiths","Big Data Fundamentals by Thomas Erl","Artificial Intelligence and Machine Learning by Vinod Chandra S. S"];
}
