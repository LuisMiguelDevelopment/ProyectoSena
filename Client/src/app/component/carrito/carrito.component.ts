import { Component, OnInit } from '@angular/core';
import { ProductoServicesService } from 'src/app/services/producto-services.service';
import { CompraService } from 'src/app/services/compra.service';
import { Compra } from 'src/models/Compra';
import { Carrito } from 'src/models/cart';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listCart: Carrito[] = [];
 

  constructor(private _productoCarrito : ProductoServicesService , private _compraService : CompraService) { }

  ngOnInit(): void {
    
    
  }

  

}
