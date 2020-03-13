import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class DataService {

    private REST_API_SERVER = "http://localhost:9090";

    private messageSource = new BehaviorSubject<any>("default message");
    currentMessage = this.messageSource.asObservable();

    private messageSource1 = new BehaviorSubject<number>(10000);    
    currentMessage1 = this.messageSource1.asObservable();

    constructor(private httpClient: HttpClient){}

    changeMessage(newMessage: string){
        this.messageSource.next(newMessage) 
    }

    changeMessage1(newMessage: number){
        this.messageSource1.next(newMessage) 
    }

    getAllProducts(){
        return this.httpClient.get(this.REST_API_SERVER+"/api/getProducts");
    }
}