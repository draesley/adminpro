import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any =[{
      title:'Main',
      icon:'mdi mdi-gauge',
        submenu:[
          { title:'Dashboard', url:'/dashboard'},
          { title:'ProgressBar', url:'/progress'},
          { title:'Graphics', url:'/grafic1'},
          { title:'Promises', url:'/promises'},
          { title:'Rxjs', url:'/rxjs'}
        ]
    },
    {
      title:'maintenance',
      icon:'mdi mdi-folder-lock-open',
      submenu:[
        {title:'Users',url:'/users'},
        {title:'Doctors',url:'/doctors'},
        {title:'Hospitales',url:'/hospitales'}
      ]
    }
  ];

  constructor() { }
}
