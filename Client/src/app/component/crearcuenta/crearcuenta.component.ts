import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

 

  constructor(private _loginService:LoginService , private router:Router) { }


  ngOnInit(): void {
  }

  onRegister(form: any) {
    this._loginService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/perfil');
    });
  }
}
