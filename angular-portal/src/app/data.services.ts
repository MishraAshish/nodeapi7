import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class DataService {

    private messageSource = new BehaviorSubject<any>("default message");
    currentMessage = this.messageSource.asObservable();

    private messageSource1 = new BehaviorSubject<number>(10000);    
    currentMessage1 = this.messageSource1.asObservable();

    constructor(){}

    changeMessage(newMessage: string){
        this.messageSource.next(newMessage) 
    }

    changeMessage1(newMessage: number){
        this.messageSource1.next(newMessage) 
    }
}