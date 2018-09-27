import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService, SidebarService, SharedService } from './services.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    SettingService,
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
