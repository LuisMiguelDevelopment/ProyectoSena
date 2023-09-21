import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from 'src/models/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  url = 'http://localhost:4000/api/compra/';

  constructor(private http : HttpClient) { }

  addAlaCompra(compra: Compra):Observable<any>{
    const {Nombre , Urlimagen , Precio , Cantidad} = compra;
    const CompraData ={Nombre , Urlimagen , Precio , Cantidad}
    return this.http.post(this.url,CompraData)
  }

}
