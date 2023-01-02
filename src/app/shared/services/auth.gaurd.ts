import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  userInfo
  canActivate() {
    // 
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo && this.userInfo.token) {
      return true;
    } else {
      this.router.navigateByUrl('/sessions/signin');
    }

  }


}
