import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'pogress',
                component:ProgressComponent
            },
            {
                path:'grafic1',
                component:Grafic1Component
            },
            {
                path:'',
                redirectTo:'/dashboard',
                pathMatch: 'full'
            },
        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'**',
        component: NopagefoundComponent
    }
]
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});