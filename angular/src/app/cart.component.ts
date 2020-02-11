import { Component, Input } from '@angular/core';

@Component({
    selector: 'cart-app',
    templateUrl: 'cart.component.html',
    styleUrls:['cart.component.css']
})

export class CartComponent {
    title = 'cart-app-component';
    heading = 'Cart Component application';
    
    @Input() cartType : string;
    @Input() cartAmount :  string;

    constructor(){
        console.log("cartType "+ this.cartType);
    }

    // implement OnInit's `ngOnInit` method
    ngOnInit() { 
        this.logIt(`OnInit`, 1); 
        console.log("New Vaalue" + this.cartType)
    }

    sayHello(msg){
        alert("I am saying - "+ msg);
    }

    logIt(msg: string, nextId: number) {
        console.log(`#${nextId++} ${msg}`);
      } 
}