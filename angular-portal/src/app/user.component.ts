import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {DataService} from "./data.services";

@Component({
    selector:"user-child",
    template:`
        <div class="notifyParent">
            <input type="text" value={{childUserName}} (keyup)="nameChange($event)" />
            <button (click)="sendNameToParent()">SendNameToParent</button>

            <br/>
            {{mymessage}}
            <br/>
            <button (click)="newMessage()" class="button">New Message From User Component</button>

            <button (click)="fetchProducts()" class="button">Fetch Products</button>
            <ul class="productTable">
                <li *ngFor="let product of products">
                    <h2>{{product.productName}} / {{product.productPrice}}</h2>
                    <p> {{product.display}} </p>
                </li>
            </ul>
        </div>
    `
})

export class UserComponent{
    childUserName:string = "Child User Name";
    mymessage:string = "Child Message For ViewChild";
    message:string = "Child Message For View Child";
    products = [];
    @Output() messageEvent = new EventEmitter<any>();
    
    nameChange(e){
        this.childUserName = e.target.value;
    }

    sendNameToParent(){
        this.messageEvent.emit(25626 + this.childUserName);
    }

    constructor(private data: DataService){}

    ngOnInit(){
        this.data.currentMessage.subscribe(mymessage => this.mymessage = mymessage)
    }

    newMessage(){
        this.data.changeMessage("Hello From User Sibling 250050");
    }

    fetchProducts() {
        this.data.getAllProducts().subscribe((data: any[])=>{
            console.log(data);
            this.products =  data;
          },
          err => console.log("We are getting error while fetching product list " +err),
          ()=>console.log("Complete")
          )
    }
}