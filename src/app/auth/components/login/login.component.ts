import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:"",
      password:""
    })
  }

  ngOnInit(): void {
  }

  onSubmit(user:any){
    console.log(user)
  }
}
