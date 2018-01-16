import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  private loginStatus = true;
  private redirectUrl = '';
  constructor() { }
  getLoginStatus(): boolean {
    return this.loginStatus;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getRedirecrUrl(): string {
    const redirectUrl = this.redirectUrl;
    this.redirectUrl = '';
    return redirectUrl;
  }
  login(): Observable<boolean> {
    this.loginStatus = true;
    return Observable.of(this.loginStatus).delay(1500);
  }
  logout(): Observable<boolean> {
    this.loginStatus = false;
    return Observable.of(this.loginStatus).delay(500);
  }
}
