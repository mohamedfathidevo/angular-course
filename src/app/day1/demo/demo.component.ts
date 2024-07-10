import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title = "Angular course";
  data = {
    name: "mohamed",
    age: 24,
    courses: [
      "HTML",
      "JAVASCRIPT",
      "ANGULAR"
    ]
  }
}
