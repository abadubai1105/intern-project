import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intern-project';
  links = ['First', 'Second', 'Third', 'add'];
  activeLink = this.links[0];
}
