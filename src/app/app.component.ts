import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConectorComponent } from './day3/conector/conector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
}
