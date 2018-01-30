import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

import { AppRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CrisisManageComponent } from '../crisis-manage/crisis-manage.component';
import { HeroManageComponent } from '../hero-manage/hero-manage.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageCenterComponent } from './../message-center/message-center.component';

import { AuthGuardService } from '../../service/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    CrisisManageComponent,
    HeroManageComponent,
    HeroDetailComponent,
    MessageCenterComponent
  ],
  providers: [AuthGuardService]
})
export class AdminModule { }
