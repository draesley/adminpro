import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService, SidebarService, SharedService, UploadFileService, LoginGuardGuard } from './services.index';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


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
    LoginGuardGuard,
    UploadFileService,
    ModalUploadService
  ]
})
export class ServiceModule { }
