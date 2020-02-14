import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {DataService} from "./data.services";

@Component({
    selector:"user-child",
    template:`
        <div class="notifyParent">
            <input type="text" value={{childUserName}} (keyup)="nameChange($event)" />
            <button (click)="sendNameToParent()">SendNameToParent</button>

            <br/>
            <button (click)="newMessage()">UpdateAndBroadCast</button>

        </div>
    `,
    providers: [DataService]
})

export class UserComponent{
    childUserName:string = "Child User Name";
    message:string = "Child Message For ViewChild";
    mymessage:string = "Message Before Broadcast";

    @Output() messageEvent = new EventEmitter<string>();
    
    nameChange(e){
        this.childUserName = e.target.value;
    }

    sendNameToParent(){
        this.messageEvent.emit(this.childUserName);
    }

    constructor(private data: DataService){}

    // ngOnInit(){
    //     this.data.currentMessage.subscribe(mymessage => this.mymessage = mymessage)
    // }

    newMessage(){
        debugger;
        this.data.changeMessage("Hello From Parent/ Sibling");
    }
}