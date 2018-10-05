import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService, SidebarService, SharedService } from './services.index';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    SettingService,
    SharedService,
    SidebarService,
    UserService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
