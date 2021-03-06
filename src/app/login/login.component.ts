import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert:string = 'User name is required';
  pwdAlert:string = 'Password is required'

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = fb.group({
      'name': [null, [Validators.required, Validators.minLength(3)]],
      'pwd': [null, [Validators.required]]
    });
   }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.get('name').value);
    console.log(this.loginForm.get('pwd').value);
    this.router.navigate(['/albums']);
    // this.loginService.login({})
    //     .subscribe((res)=>{ 
    //       console.log(res);
    //       this.router.navigate(['/albums']); 
    //     });
  }

}
