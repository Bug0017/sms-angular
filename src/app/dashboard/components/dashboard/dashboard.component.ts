import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  #products:any;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProducts().subscribe(console.log)
  }

}
