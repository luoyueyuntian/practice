import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../service/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css'] })
export class LoginComponent implements OnInit {
  loginStatus = false;
  message = '';
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.loginStatus = this.authService.getLoginStatus();
  }
  login(): void {
    this.message = 'Trying to log in ...';
    this.authService.login()
      .subscribe((loginSucess: boolean) => {
        this.loginStatus = loginSucess;
        if (loginSucess) {
          this.message = '';
          const redirectUrl = this.authService.getRedirecrUrl();
          if (redirectUrl !== '') {
            this.router.navigateByUrl(redirectUrl);
          }
        }
      });
  }
  logout(): void {
    this.message = 'Trying to log out ...';
    this.authService.logout()
      .subscribe((loginSucess: boolean) => {
        if (!loginSucess) {
          this.message = '';
        }
        this.loginStatus = loginSucess;
      });
  }
  ngOnInit() { }

}
