import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Skills,Experience, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
