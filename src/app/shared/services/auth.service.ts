import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;
  // public apiUrl = 'https://abctdawltest.pro-erp.site/public/api/';
  // public apiUrl = 'https://abctdawltest.nodev.store/public/api/';
  public apiUrl = 'https://backendcrm.abctadawul.com/api/';



  constructor(private store: LocalStoreService, private router: Router, public http: HttpClient) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.authenticated = true;
    this.store.setItem("demo_login_status", true);
    return of({}).pipe(delay(1500));
  }
  signout() {
    this.authenticated = false;
    this.store.setItem("demo_login_status", false);
    this.router.navigateByUrl("/sessions/signin");
  }

  public Login(loginForm) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiUrl + "admin/user/login", loginForm , { headers }).toPromise();
  }
}
