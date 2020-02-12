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
  userName:string = "Please Enter Name";
  userNameParent:string = "Please Enter Name";

  cartTypeParent = 'Shopping Cart';
  cartAmountParent = '10000';

  constructor(){
    this.title = "Angular Application Title";
  }

  nameChange(e){
    //debugger;
    //console.log("Name - "+e.target.value)
    this.userName = e.target.value;
    //this.userNameParent = e.target.value;
  }

  passUserName(){
    //debugger;
    //this.userNameParent = this.userName;
    this.userNameParent = (document.getElementById("username") as HTMLInputElement).value;
  }

}
