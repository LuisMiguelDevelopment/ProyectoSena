import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from 'src/models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {

  url = 'http://localhost:4000/api/productos/';
  url2 = 'http://localhost:4000/api/productos-cart/';

  constructor(private http : HttpClient) { }


  getProductos():Observable<any>{
    return this.http.get(this.url);
  }

  getProductosCart():Observable<any>{
    return this.http.get(this.url2)
  }

  addProductoCart(producto: Productos):Observable<any>{
    const {Nombre , Urlimagen , Precio} = producto;
    const productoData = {Nombre , Urlimagen , Precio}
    return this.http.post(this.url2,productoData)
  }
  addProducto(producto: Productos):Observable<any>{
    const {Nombre, Descripcion , Urlimagen , Precio , Marca} = producto;
    const productoData = {Nombre , Urlimagen , Precio , Descripcion}
    return this.http.post(this.url,productoData)
  }

  putProductoCart(productoId :string , data :{body: any , query:string} ):Observable<any>{
    const {body , query} =data
    const url2 = `${this.url2}/${productoId}?query=${query}`;
    return this.http.put(url2 , body);

  }

  deleteProductoCart(productoId:string):Observable<any>{
    return this.http.delete(this.url2 + productoId)
  }
  deleteProducto(productoId:string):Observable<any>{
    return this.http.delete(this.url + productoId)
  }

  actualizarProducto(productoId: string , producto :Productos):Observable<any>{
    return this.http.put(this.url + productoId , producto)
  }
  obtenerProducto(productoId: string ):Observable<any>{
    return this.http.get(this.url + productoId )
  }

}
