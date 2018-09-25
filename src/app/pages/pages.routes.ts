import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafic1Component } from "./grafic1/grafic1.component";

const pagesRoutes: Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'progress',
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
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
