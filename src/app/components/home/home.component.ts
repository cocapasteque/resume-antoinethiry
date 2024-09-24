import { Component } from '@angular/core';
import { cvData } from '../../../assets/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly cvData = cvData;
}
