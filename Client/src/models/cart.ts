export class Carrito{
    _id?: number;
    Nombre: string;
    Urlimagen: string;
    Cantidad: number;
    Precio: number;
    Agregado : boolean
   
    constructor(Nombre:string , Urlimagen:string,Cantidad:number,Precio:number , Agregado: boolean) {
       
        this.Nombre = Nombre;
        this.Urlimagen =Urlimagen;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.Agregado = Agregado

        
    }

} 