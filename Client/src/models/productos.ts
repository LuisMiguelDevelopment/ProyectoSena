export class Productos{

    _id?: number;
    Nombre: string;
    Descripcion: string;
    Urlimagen: string;
    Marca: string;
    Precio: number;


    
    constructor(Nombre: string, Decripcion: string , Urlimagen: string , Marca: string, Precio: number) {
  
    this.Nombre = Nombre;
    this.Descripcion = Decripcion;
    this.Urlimagen = Urlimagen;
    this.Marca= Marca;
    this.Precio = Precio
}

}
