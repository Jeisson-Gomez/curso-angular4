import { Injectable } from "@angular/core";

@Injectable()

export class ropaService{
    public nombre_prenda = 'Pantalones Vaqueros';
    
    prueba(nombre_prenda: any){
        return nombre_prenda;
    }
}