import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userInfo = {
    userName:""
  };

  constructor(private userService : UserService, private router: Router) { 
    this.userService.currentUserInfo.subscribe((data)=>{
      //debugger;
      console.log("User Data ",data);
      this.userInfo = data;
  })
  }

  ngOnInit(): void {
  }

  register(form){
    //debugger;
    console.log(form.value);
    this.userService.signinUser(form.value).subscribe(
      (data: any[])=>{ //success : callback of observable object
        console.log(data);
        this.userService.updateUserInfo(data);
        this.router.navigateByUrl("/product");
      },
      (error) => console.log(error), //error: callbak of observable object
      () => console.log("Complete")
      ) 
  }
}
