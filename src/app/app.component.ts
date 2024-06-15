import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('toggleHeight', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        transform: 'translateY(-100%) scaleY(0)',
        top: 0
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        transform: 'translateY(0) scaleY(1)',
        top: 0
      })),
      transition('collapsed <=> expanded', [
        animate('350ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'cv';
  showSl = false;
  show303 = false;
  showMic = false;

}
