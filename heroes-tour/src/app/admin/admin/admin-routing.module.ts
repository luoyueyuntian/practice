import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../../service/auth-guard.service';
import { CrisisManageComponent } from '../crisis-manage/crisis-manage.component';
import { HeroManageComponent } from '../hero-manage/hero-manage.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { MessageCenterComponent } from './../message-center/message-center.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                // canActivateChild: [AuthGuardService],
                children: [
                    {
                        path: 'crises-manage',
                        component: CrisisManageComponent
                    }, {
                        path: 'heroes-manage',
                        component: HeroManageComponent
                    }, {
                        path: 'hero-detail/:id',
                        component: HeroDetailComponent
                    }, {
                        path: 'message-center',
                        component: MessageCenterComponent
                    }, {
                        path: '',
                        component: DashboardComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }