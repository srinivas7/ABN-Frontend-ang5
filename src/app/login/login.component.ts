import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
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
  }

}
