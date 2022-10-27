import { Injectable } from "@angular/core";

@Injectable()

export class RopaService{
    public nombre_prenda = 'Pantalones Vaqueros';
    public coleccion_ropa = ['Pantalones Blancos', ' Camisetas Rojas'];
    
    prueba(nombre_prenda: any){
        return nombre_prenda;
    }

    addRopa(nombre_prenda: string){
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa(){
        return this.coleccion_ropa;
    }
}