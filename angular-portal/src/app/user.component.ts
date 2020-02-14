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
        </div>
    `
})

export class UserComponent{
    childUserName:string = "Child User Name";
    mymessage:string = "Child Message For ViewChild";

    @Output() messageEvent = new EventEmitter<string>();
    
    nameChange(e){
        this.childUserName = e.target.value;
    }

    sendNameToParent(){
        this.messageEvent.emit(this.childUserName);
    }

    constructor(private data: DataService){}

    ngOnInit(){
        this.data.currentMessage.subscribe(mymessage => this.mymessage = mymessage)
    }

    newMessage(){
        this.data.changeMessage("Hello From User Sibling");
    }
}