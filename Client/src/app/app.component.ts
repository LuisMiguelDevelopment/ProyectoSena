import { Component } from '@angular/core';
import { ProductoServicesService } from './services/producto-services.service';
import { Carrito } from 'src/models/cart';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';


 
  listCart: Carrito[] = [];
 

  constructor(private _productoCarrito : ProductoServicesService , private _loginService : LoginService) { }

  ngOnInit(): void {
    this.ObtenerProductosCart();

    document.addEventListener('DOMContentLoaded', () => {
      const menus = document.querySelector(".menu") as HTMLElement;
      const navLinks = document.querySelector(".navbar__enlaces") as HTMLElement;
      const salir = document.querySelector(".fa-x") as HTMLElement;
      const salirCarrito = document.querySelector(".salir-carrito") as HTMLElement;
      const carrito = document.querySelector(".carrito") as HTMLElement;
      const abrir = document.querySelector(".abrir") as HTMLElement;
      const abrirCarrito = document.querySelector(".abrirCarrito") as HTMLElement;
      const perfil = document.querySelector(".perfil") as HTMLElement;

      menus.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
      });

      salir.addEventListener('click',()=>{
        perfil.classList.toggle('mobile-menu')
      })
      abrir.addEventListener('click',()=>{
        perfil.classList.toggle('mobile-menu')
      })

      salirCarrito.addEventListener('click',()=>{
        carrito.classList.toggle('mobile-menu')
      })
      abrirCarrito.addEventListener('click',()=>{
        carrito.classList.toggle('mobile-menu')
      })
    });
  }


  

  ObtenerProductosCart(){
    this._productoCarrito.getProductosCart().subscribe(data=>{
      console.log(data);
      this.listCart = data.productosCart;
    },error =>{
      console.log(error)
    })
  }


  


loginLoggead():boolean{
  return this._loginService.isLoggedIn();
}


}
