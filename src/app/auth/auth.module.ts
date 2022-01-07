import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class AuthModule {}
