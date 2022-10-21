import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_fruta = 'Naranja, Mandarina, Banano, Sandia';

    public nombre:string = 'Jeisson Gomez';
    public edad:number = 33;
    public mayorDeEdad:boolean = true;
    public trabajadore:Array<any> = ['Ingeniero', 44, 'Programador'];
    comodin:any = 'Si'

    constructor(){}   
}