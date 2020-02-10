import { Component } from '@angular/core';

@Component({
    selector: 'cart-app',
    templateUrl: 'cart.component.html'
})

export class CartComponent {
    title = 'cart-app-component';
    heading = 'Cart Component application';

    constructor(){}

    sayHello(msg){
        alert("I am saying - "+ msg);
    }
}