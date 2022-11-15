export class Producto {
    // public nombre : string;
    // public imagen : string;
    // public precio : number;


    //CREAMOS UN CONSTRUCTOR PARA RECIBIR LOS PARAMETROS DEL PRODUCTO
    // constructor (name : string, imagen : string) {
    //     this.nombre = name;
    //     this.imagen = imagen;
    // }

    //constructor (name : string, imagen : string, price : number) {
        // this.nombre = name;
        // this.imagen = imagen;
        // this.precio = price;
    //}
    constructor(public nombre : string, public imagen : string, public precio : number
    ) {  }
}