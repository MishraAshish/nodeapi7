import { Component } from '@angular/core';
import { CartComponent } from "./cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  heading = 'Angular Cart application';
}
