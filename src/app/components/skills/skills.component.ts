import {Component} from '@angular/core';
import {SkillSectionComponent} from "./skill-section/skill-section.component";
import {cvData} from "../../../assets/data";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillSectionComponent, CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  protected readonly cvData = cvData;

  protected readonly skillsToLearn = cvData.skills.filter(x => x.learn).sort(x => -x.value).slice(0,3);

}
