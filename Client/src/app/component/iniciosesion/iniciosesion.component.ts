import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserI } from 'src/models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {



  constructor(private _loginService:LoginService , private router:Router) { }


  ngOnInit(): void {
  }

  onLogin(form:any){
    this._loginService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('/perfil')
    })
  }

}
