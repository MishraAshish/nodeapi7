import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CartComponent } from "./cart.component";
import { UserComponent } from "./user.component";
import {DataService} from "./data.services";

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
  userNameFromChild = "";
  cartTypeParent = 'Shopping Cart';
  cartAmountParent = '10000';
  message = "Nothing";

  constructor(private data: DataService){
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

  receiveMesssage($event){
    this.userNameFromChild = $event;
  }

  @ViewChild(UserComponent) child;

  ngAfterViewInit(){
    this.message = this.child.message;
  }


  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this.data.changeMessage("Hello From Parent/ Sibling");
  }

}