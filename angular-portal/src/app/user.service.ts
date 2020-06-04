import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private REST_API_SERVER:string = "http://localhost:9090";

  private userInfo = new BehaviorSubject<any>({});
  currentUserInfo = this.userInfo.asObservable();

  constructor(private httpClient:HttpClient) { }

  updateUserInfo(userInfo: {}){
    this.userInfo.next(userInfo) 
  }

  signinUser(data){
    return this.httpClient.post(this.REST_API_SERVER+"/api/signInUpUser",data);
  }
}
