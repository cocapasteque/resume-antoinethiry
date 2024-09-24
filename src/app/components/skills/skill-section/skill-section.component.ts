import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {
  @Input() logo: string = "";
  @Input() name: string = "";
  @Input() value: number = 0;
}
