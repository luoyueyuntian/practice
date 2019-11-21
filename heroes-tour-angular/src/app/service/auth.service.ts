import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const DEFAULT_LOGIN_STATUS = true;

@Injectable()
export class AuthService {
  private loginStatus = DEFAULT_LOGIN_STATUS;
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
    return of(this.loginStatus).pipe(delay(500));
  }
  logout(): Observable<boolean> {
    this.loginStatus = false;
    return of(this.loginStatus).pipe(delay(500));
  }
}
