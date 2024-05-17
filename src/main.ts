import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
  styleUrl: 'global_styles.scss'
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
