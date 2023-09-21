export class Compra{
    _id?: number;
    Nombre: string;
    Urlimagen: string;
    Cantidad: number;
    Precio: number;

    constructor(Nombre:string,Urlimagen:string,Cantidad:number,Precio:number) {
   
        this.Nombre = Nombre;
        this.Urlimagen = Urlimagen;
        this.Cantidad = Cantidad;
        this.Precio = Precio
    
    }

}


