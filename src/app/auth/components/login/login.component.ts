import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private formBuilder: FormBuilder , private authService:AuthService , private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(user:any){
    this.authService.loginUser(user.email, user.password).subscribe(data => {
      if(data){
        this.router.navigateByUrl('/dashboard')
      }
    })
  }
}
