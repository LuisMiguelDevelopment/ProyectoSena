import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable , BehaviorSubject} from 'rxjs';
import { JwtResponseI } from 'src/models/Jwt-response';
import { UserI } from 'src/models/User';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:4000/api/usuarios/login/'
  url2 = 'http://localhost:4000/api/usuarios/register/'

  authSubject = new BehaviorSubject(false);
  private token: string ='';

  constructor(private http : HttpClient , private location: Location , private router :Router ) { }


  register(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(this.url2, user).pipe(
      tap((res: JwtResponseI) => {
        if (res && res.dataUser?.Tipo) { 
          this.saveToken(res.accessToken, res.expiresIn, res.dataUser.Tipo);
          this.router.navigateByUrl('/perfil');
          console.log(res)
        }
      })
    );
  }
  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(this.url, user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          this.saveToken(res.accessToken, res.expiresIn ,res.dataUser.Tipo);
          console.log(res);
          this.location.replaceState('/perfil');
        }
      }
    ));
  }


  cerrarSesion(){
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
    localStorage.removeItem("tipo")
  }

 

  private saveToken(token:string, expireIn:string , tipo:string){
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRES_IN",expireIn);
    localStorage.setItem("tipo",tipo);
    this.token = token;
  }


  getUserRole():string{
    return localStorage.getItem('tipo') || '';
  }

 
  isLoggedIn(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return !!token; 
  }

  private getToken():string{
    if(!this.token ){
      this.token= localStorage.getItem("ACCESS_TOKEN")?? '';
    }
    return this.token;
  }

}
