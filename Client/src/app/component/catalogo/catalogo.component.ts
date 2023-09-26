import { Component, OnInit } from '@angular/core';
import { ProductoServicesService } from 'src/app/services/producto-services.service';
import { Productos } from 'src/models/productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listProductos :Productos[] = [];

  constructor(private _productosService:ProductoServicesService) { }

  ngOnInit(): void {
    this.ObtenerProductos();
    this.agregarAlCarrito(Productos)
  }


  ObtenerProductos(){
    this._productosService.getProductos().subscribe(data=>{
      console.log(data);
      this.listProductos = data;
    },error =>{
      console.log(error)
    })
  }

  getImageUrl(product: Productos): string {
    return 'http://localhost:4000/uploads/' + product.Urlimagen;
  }

  agregarAlCarrito=(productos: any)=>{
    this._productosService.addProductoCart(productos).subscribe(
      response =>{
        console.log(response)
      },error =>{
        console.log(error)
      }
    )
  }
}

