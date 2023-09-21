import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { LoginService} from './login.service'


@Injectable({
  providedIn: 'root'
})
export class RolesService implements CanActivate {

  constructor(private _loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    const userRole = this._loginService.getUserRole();
    if (userRole === 'Admi') {
      return true; 
    } else {
      this.router.navigate(['/carrito']); 
      return false; 
    }
  }
}
