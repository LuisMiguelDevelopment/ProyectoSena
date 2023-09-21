import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServicesService } from 'src/app/services/producto-services.service';
import { Productos } from 'src/models/productos';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  productoForm : FormGroup;
  titulo ='Crear - Producto';
  productoId : string | null;


  constructor(private fb : FormBuilder,
              private _productoService: ProductoServicesService,
              private router : Router,
              private aRoute : ActivatedRoute) {
    this.productoForm = this.fb.group({
      Nombre:['',Validators.required],
      Descripcion:['',Validators.required],
      Urlimagen:['',Validators.required],
      Marca:['',Validators.required],
      Precio:['',Validators.required],
    })
    this.productoId = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.Editar();
    /* this.agregarProducto(); */
  }

  /* agregarProducto(){
    const PRODUCTO : Productos ={
      Nombre: this.productoForm.get('Nombre')?.value,
      Descripcion: this.productoForm.get('Descripcion')?.value,
      Urlimagen: this.productoForm.get('Urlimagen')?.value,
      Marca: this.productoForm.get('Marca')?.value,
      Precio: this.productoForm.get('Precio')?.value,
    }

    if(this.productoId !== null){
      this._productoService.actualizarProducto(this.productoId, PRODUCTO).subscribe(data=>{
        console.log('Actulizar')
        this.router.navigate(['/admi'])
      },error =>{
        console.log('Error 1');
        this.productoForm.reset();
      })
    }else {
      console.log(PRODUCTO);
      this._productoService.addProducto(PRODUCTO).subscribe(data=>{
        console.log('Producto Guardado')
        this.router.navigate(['/admi'])
      },error =>{
        console.log('Error 2');
        this.productoForm.reset();
      })
    }

  } */

  Editar(){
    if(this.productoId !== null){
      this.titulo = "Editar Producto";
      this._productoService.obtenerProducto(this.productoId).subscribe(data=>{
        this.productoForm.setValue({
          Nombre : data.Nombre,
          Descripcion:data.Descripcion,
          Urlimagen:data.Urlimagen,
          Marca:data.Marca,
          Precio:data.Precio,

        })
      })
    }
  }


  eliminarProducto(productoId: any){
    this._productoService.deleteProducto(productoId).subscribe(data=>{
      console.log('Producto eliminado');
    })
  }

}
