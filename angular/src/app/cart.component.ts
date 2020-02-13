import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cart-app',
    templateUrl: 'cart.component.html',
    styleUrls:['cart.component.css']
})

export class CartComponent {
    title:string = 'Cart Component application';
    total:number = 100000;

    @Input() cartType : string;
    @Input() cartAmount :  string;
    @Input() userName : string;

    //@Output() message :string;

    constructor(){
        console.log("cartType "+ this.cartType);
    }

    // implement OnInit's `ngOnInit` method
    ngOnInit() { 
        this.logIt(`OnInit`, 1); 
        console.log("New Vaalue" + this.cartType)
    }

    sayHello(msg:string):void{
        alert("I am saying - "+ msg +" "+ this.userName);
        //return "";
    }

    logIt(msg: string, nextId: number) {
        console.log(`#${nextId++} ${msg}`);
      } 
}