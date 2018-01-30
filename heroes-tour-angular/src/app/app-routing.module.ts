import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeComponent } from './compose/compose.component';
import { LoginComponent } from './login/login.component';
import { CrisisComponent } from './crisis center/crisis.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroDetailComponent } from './admin/hero-detail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeComponent,
        outlet: 'popup'
    }, {
        path: 'heroes',
        component: HeroComponent
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent
    }, {
        path: 'crisis-center',
        component: CrisisComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }