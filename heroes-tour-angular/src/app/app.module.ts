import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin/admin.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { CrisisComponent } from './crisis center/crisis.component';
import { ComposeComponent } from './compose/compose.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroService } from './service/hero.service';
import { CrisisService } from './service/crisis.service';
import { AuthService } from './service/auth.service';
import { MessageService } from './service/message.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroComponent,
    CrisisComponent,
    ComposeComponent,
    PageNotFoundComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroService,
    CrisisService,
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
