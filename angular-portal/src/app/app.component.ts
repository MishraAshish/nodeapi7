import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CartComponent } from "./cart.component";
import { UserComponent } from "./user.component";
import {DataService} from "./data.services";
import { FormsModule } from '@angular/forms';

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

  products = [];

  constructor(private dataService: DataService){
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
    this.message = this.child.message + "New Batch";
  }

  ngOnInit(){
    this.dataService.currentMessage.subscribe(message => this.message = message);

    this.dataService.getAllProducts().subscribe(
      (data: any[])=>{
        console.log(data);
        this.products = data;
      },
    (error) => console.log(error),
    () => console.log("Complete")
    ) 
  }

  newMessage(){
    this.dataService.changeMessage("Hello From Parent/ Sibling Using Data Service");
  }

  register(form) {
    console.log(form.value);
  }

}
