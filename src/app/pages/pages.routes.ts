import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafic1Component } from "./grafic1/grafic1.component";
import { AccoutSettingComponent } from "./accout-setting/accout-setting.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from '../services/guards/loginGuard.guard';
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "../pages/users/users.component";

const pagesRoutes: Routes = [
    {
        path:'',
        component:PagesComponent,
        canActivate:[LoginGuardGuard],
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                data:{title:'Dashboard'}
            },
            {
                path:'progress',
                component:ProgressComponent,
                data:{title:'Progress'}
            },
            {
                path:'grafic1',
                component:Grafic1Component,
                data:{title:'Graphics'}
            },
            {
                path:'promises',
                component:PromisesComponent,
                data:{title:'Promises'}
            },
            {
                path:'',
                redirectTo:'/dashboard',
                pathMatch: 'full'
            },
            {
                path:'accout-setting',
                component:AccoutSettingComponent,
                data:{title:'Accout-Setting'}
            },
            {
                path:'profile',
                component:ProfileComponent,
                data:{title:'Profile'}
            },
            {
                path:'rxjs',
                component:RxjsComponent,
                data:{title:'Observable'}
            },
            //Mantenimiento
            {
                path:'users',
                component:UsersComponent,
                data:{title:'Users'}
            },
            {
                path:'doctors',
                component:UsersComponent,
                data:{title:'Doctors'}
            },
            {
                path:'hospitales',
                component:UsersComponent,
                data:{title:'Hospitales'}
            }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
