import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector:"user-child",
    template:`
        <div class="notifyParent">
            <input type="text" value={{childUserName}} (keyup)="nameChange($event)" />
            <button (click)="sendNameToParent()">SendNameToParent</button>
        </div>
    `
})

export class UserComponent{
    childUserName:string = "Child User Name";
    message:string = "Child Message For ViewChild";

    @Output() messageEvent = new EventEmitter<string>();
    
    nameChange(e){
        this.childUserName = e.target.value;
    }

    sendNameToParent(){
        this.messageEvent.emit(this.childUserName);
    }
}