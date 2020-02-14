import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class DataService {

    private messageSource = new BehaviorSubject<string>("default message");

    currentMessage = this.messageSource.asObservable();

    constructor(){}

    changeMessage(newMessage: string){
        this.messageSource.next(newMessage) 
    }
}