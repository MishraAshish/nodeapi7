import { Component } from '@angular/core';
import { CartComponent } from "./cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  heading:string = 'Angular Cart application';
  cartTypeParent = 'Shopping Cart';
  cartAmountParent = '10000';

  constructor(){
    this.title = "Angular Application Title";
  }

  

}
