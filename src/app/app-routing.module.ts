import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    children: [
      {
        path:'login' , component: LoginComponent
      },
      {
        path:'register', component: RegisterComponent
      },
      {
        path:'',
        redirectTo:'/login',
        pathMatch:"full"
      }
    ]
  },
  {
    path: '', redirectTo:'/auth/login' , pathMatch:'full'
  },
  {
    path:'dashboard' , component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
