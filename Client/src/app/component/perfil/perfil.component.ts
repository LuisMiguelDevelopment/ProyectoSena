import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router : Router , private _loginService:LoginService) { }

  ngOnInit(): void {
  }

  cerrarSesion():void{
    this._loginService.cerrarSesion();
    this.router.navigate(['/inicio'])
  }

}
