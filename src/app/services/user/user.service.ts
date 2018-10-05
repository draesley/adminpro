import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map'
//import { map } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:User;
  token:string;

  constructor(
      private http:HttpClient,
      private router:Router
  ) { 
    this.loadStorage();
  }

  loadOut(){
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  userSignin(){
    return (this.token.length > 5 ) ? true : false;
  }

  loadStorage(){
    if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token');
        this.user = JSON.parse(localStorage.getItem('user'));
    }else{
      this.token = '';
      this.user = null;
    }
  }

  saveStorage(id:string, token:string, user:User){

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  loginGoogle(token:string){

    let url = URL_SERVICES + '/login/google';

    return this.http.post(url, {token}).pipe(map((res:any)=>{
      this.saveStorage(res.id, res.token, res.user);
      return true;
    }));
  }

  login(user:User, remember:boolean = false){

    let url = URL_SERVICES + '/login';

    if(remember ){
      localStorage.setItem('email',user.email);
    }else{
      localStorage.removeItem('email');
    }

    return this.http.post(url, user).pipe(map((res:any)=>{

       this.saveStorage(res.id, res.token, res.user);

      return true;
    }));
  }

  createUser(user:User){
    let url = URL_SERVICES +  '/user';

    return this.http.post(url, user)
    .pipe(map((res:any) =>{
      swal('User Created','ok Success','success');
      return res.user;
    }));
  }
}
