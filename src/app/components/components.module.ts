import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {WorkComponent} from "./work/work.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, NavbarComponent, HomeComponent, WorkComponent, AboutComponent, ContactComponent, SkillsComponent
  ],
  exports: [HomeComponent, NavbarComponent, WorkComponent, AboutComponent, ContactComponent, SkillsComponent]
})
export class ComponentsModule {
}
