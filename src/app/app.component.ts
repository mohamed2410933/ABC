import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck{
  title = 'bootDash';
  constructor(private spinner: NgxSpinnerService , private router : Router){
   
    // localStorage.getItem(hasNewPassword)
  //   if (!localStorage.getItem('forceLogout')) {
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     // window.location.href = '/login';
  //     this.router.navigateByUrl("/sessions/signin");

  // }
  }
  ngDoCheck(): void {

  }

  ngOnInit() {
    this.checkForceLogout();

  }

  checkForceLogout() {
    if (!localStorage.getItem('forceLogout')) {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigateByUrl("/sessions/signin");
    }
  }
}
