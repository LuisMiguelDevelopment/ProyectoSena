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
    this.ObtenerProductosCart()
    
  }

  ObtenerProductosCart(){
    this._productoCarrito.getProductosCart().subscribe(data=>{
      console.log(data);
      this.listCart = data.productosCart;
    },error =>{
      console.log(error)
    })
  }


  agregarAlCarrito(productosCart: any){
    const productoId = productosCart._id;
    const body = { ...productosCart };
    const query = 'add' 


    this._productoCarrito.putProductoCart(productoId,{body,query}).subscribe(
      response =>{
        console.log(response)
        window.location.reload();
      }
    )

  }


  mermarAlCarrito(productosCart: any){
    const productoId = productosCart._id;
    const body = { ...productosCart };
    const query = 'del' 


    this._productoCarrito.putProductoCart(productoId,{body,query}).subscribe(
      response =>{
        console.log(response)
        window.location.reload();
      }
    )
  }


  eliminarDelCarrito(productoId: any){
    this._productoCarrito.deleteProductoCart(productoId).subscribe(data=>{
      console.log('Eliminado del carrito de compras')
      this.ObtenerProductosCart();
    })
  }


  comprarDelCarrito=(compra:any)=>{
    this._compraService.addAlaCompra(compra).subscribe(
      response =>{
        console.log(response)
      },error =>{
        console.log(error)
      }
    )
  }


}
